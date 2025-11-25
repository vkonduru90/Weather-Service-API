import { Request, Response } from 'express';
import { WeatherController } from './weather.controller';
import { Gridpoint12hForecastPeriod, Gridpoint12hForecast, Point, NWSForecastOfficeId } from '../openapi/generated';

jest.mock('../services/weather.service');

describe('WeatherController', () => {
  let controller: WeatherController;
  let mockReq: Partial<Request>;
  let mockRes: Partial<Response>;
  let jsonMock: jest.Mock;
  let statusMock: jest.Mock;

  beforeEach(() => {
    controller = new WeatherController();

    jsonMock = jest.fn();
    statusMock = jest.fn(() => ({ json: jsonMock, send: jest.fn() }));

    mockRes = {
      status: statusMock,
      json: jsonMock,
    };

    mockReq = {
      query: {},
    };

    jest.clearAllMocks();
  });

  it('should return 400 if latitude or longitude is missing', async () => {
    mockReq.query = { latitude: '40.0' };
    await controller.getTodayForecast(mockReq as Request, mockRes as Response);

    expect(statusMock).toHaveBeenCalledWith(400);
    expect(jsonMock).toHaveBeenCalledWith({ errors: ['Invalid input: expected string, received undefined'] });
  });

  it('should return 404 if location not found', async () => {
    mockReq.query = { latitude: '40.0', longitude: '-70.0' };
    (controller.weatherService.getLocationInfo as jest.Mock).mockResolvedValue(null);

    await controller.getTodayForecast(mockReq as Request, mockRes as Response);

    expect(statusMock).toHaveBeenCalledWith(404);
    expect(jsonMock).toHaveBeenCalledWith({ error: 'Location not found for the provided coordinates' });
  });

  it('should return 204 if forecast has no periods', async () => {
    const mockPoint: Point = { gridId: NWSForecastOfficeId.Abq, gridX: 1, gridY: 1 };
    mockReq.query = { latitude: '40.0', longitude: '-70.0' };

    (controller.weatherService.getLocationInfo as jest.Mock).mockResolvedValue(mockPoint);
    (controller.weatherService.getForecast as jest.Mock).mockResolvedValue({ periods: [] });

    await controller.getTodayForecast(mockReq as Request, mockRes as Response);

    expect(statusMock).toHaveBeenCalledWith(204);
  });

  it('should return 200 with today forecast data', async () => {
    const mockPoint: Point = { gridId: NWSForecastOfficeId.Abr, gridX: 1, gridY: 1 };
    const mockForecast: Gridpoint12hForecast = {
      periods: [
        {
          temperature: 25,
          windSpeed: '10 mph',
          windDirection: 'NW',
          shortForecast: 'Sunny',
          detailedForecast: 'Clear skies throughout the day',
          startTime: '',
          endTime: '',
          isDaytime: true,
          temperatureUnit: 'F',
          temperatureTrend: null,
          icon: '',
          number: 1,
          name: 'Today',
        } as Gridpoint12hForecastPeriod,
      ],
    };

    mockReq.query = { latitude: '40.0', longitude: '-70.0' };
    (controller.weatherService.getLocationInfo as jest.Mock).mockResolvedValue(mockPoint);
    (controller.weatherService.getForecast as jest.Mock).mockResolvedValue(mockForecast);

    await controller.getTodayForecast(mockReq as Request, mockRes as Response);

    expect(statusMock).toHaveBeenCalledWith(200);
    expect(jsonMock).toHaveBeenCalledWith({
      temperature: 25,
      windSpeed: '10 mph',
      windDirection: 'NW',
      shortForecast: 'Sunny',
      detailedForecast: 'Clear skies throughout the day',
    });
  });

  it('should handle service errors with 500', async () => {
    mockReq.query = { latitude: '40.0', longitude: '-70.0' };
    (controller.weatherService.getLocationInfo as jest.Mock).mockRejectedValue(new Error('Service error'));

    await controller.getTodayForecast(mockReq as Request, mockRes as Response);

    expect(statusMock).toHaveBeenCalledWith(500);
    expect(jsonMock).toHaveBeenCalledWith({ error: 'Unexpected error occurred' });
  });

  it('should handle 429 rate limit error', async () => {
    const error = { response: { status: 429 } };
    mockReq.query = { latitude: '40.0', longitude: '-70.0' };
    (controller.weatherService.getLocationInfo as jest.Mock).mockRejectedValue(error);

    await controller.getTodayForecast(mockReq as Request, mockRes as Response);

    expect(statusMock).toHaveBeenCalledWith(429);
    expect(jsonMock).toHaveBeenCalledWith({ error: 'Your request limit exceeded' });
  });
});
