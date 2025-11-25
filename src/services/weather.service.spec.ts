import { WeatherService } from './weather.service';
import { PointGeoJson } from '../openapi/generated';
import { AxiosResponse } from 'axios';

// Mock the generated API
jest.mock('../openapi/generated', () => {
  return {
    DefaultApiFactory: jest.fn(() => ({
      point: jest.fn(),
      gridpointForecast: jest.fn(),
    })),
  };
});

describe('WeatherService', () => {
  let service: WeatherService;
  let mockApi: any;

  beforeEach(() => {
    service = new WeatherService();
    // Access the private mock API instance
    mockApi = (service as any).weatherApi;
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('getLocationInfo', () => {
    it('should return Point properties when API call succeeds', async () => {
      const mockResponse: AxiosResponse<PointGeoJson> = {
        data: {
          properties: { gridId: 'TSA', gridX: 10, gridY: 20 },
        } as PointGeoJson,
        status: 200,
        statusText: 'OK',
        headers: {},
        config: {} as any,
      };

      mockApi.point.mockResolvedValue(mockResponse);

      const result = await service.getLocationInfo(39.75, -97.08);

      expect(result).toEqual({ gridId: 'TSA', gridX: 10, gridY: 20 });
      expect(mockApi.point).toHaveBeenCalledWith({ latitude: 39.75, longitude: -97.08 });
    });

    it('should throw error when API call fails', async () => {
      const error = new Error('Network Error');
      mockApi.point.mockRejectedValue(error);

      await expect(service.getLocationInfo(39.75, -97.08)).rejects.toThrow('Network Error');
    });
  });

  describe('getForecast', () => {
    it('should return forecast properties when API call succeeds', async () => {
      const properties = { gridId: 'TSA', gridX: 10, gridY: 20 };
      const mockForecast: AxiosResponse<any> = {
        data: {
          properties: {
            periods: [
              {
                temperature: 75,
                windSpeed: '5 mph',
                windDirection: 'NE',
                shortForecast: 'Sunny',
                detailedForecast: 'Clear skies throughout the day',
              },
            ],
          },
        } as any,
        status: 200,
        statusText: 'OK',
        headers: {},
        config: {} as any,
      };

      mockApi.gridpointForecast.mockResolvedValue(mockForecast);

      const result = await service.getForecast(properties as any);

      expect(result).toEqual(mockForecast.data.properties);
      expect(mockApi.gridpointForecast).toHaveBeenCalledWith({ wfo: 'TSA', x: 10, y: 20 });
    });

    it('should throw error when API call fails', async () => {
      const error = new Error('Network Error');
      mockApi.gridpointForecast.mockRejectedValue(error);

      const properties = { gridId: 'TSA', gridX: 10, gridY: 20 };
      await expect(service.getForecast(properties as any)).rejects.toThrow('Network Error');
    });
  });
});
