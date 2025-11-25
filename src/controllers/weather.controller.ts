import { Request, Response } from 'express';
import { WeatherService } from '../services/weather.service';
import { Gridpoint12hForecastPeriod } from '../openapi/generated';
import { todayForecastQuerySchema, TodayForecastQuery } from '../schemas/weather.schema';

export class WeatherController {
  weatherService: WeatherService;

  constructor() {
    this.weatherService = new WeatherService();
  }
  
  public getTodayForecast = async (req: Request, res: Response): Promise<Response> => {
    try {
      console.log('Received request for today forecast with query:', req.query);
      // Validate query parameters
      const parseResult = todayForecastQuerySchema.safeParse(req.query);

      if (!parseResult.success) {
        const errors = parseResult.error.issues.map((err) => err.message);
        return res.status(400).json({ errors });
      }

      const query: TodayForecastQuery = parseResult.data;

      const latitude = parseFloat(query.latitude as string);
      const longitude = parseFloat(query.longitude as string);

      console.log(`Fetching location info for lat: ${latitude}, lon: ${longitude}`);
      const pointProperties = await this.weatherService.getLocationInfo(latitude, longitude);
      console.log('Location info retrieved:', pointProperties);

      // Check for gridId, gridX, gridY existence
      if (!pointProperties || !pointProperties.gridId) {
        console.error('Location not found for the provided coordinates');
        return res.status(404).json({ error: 'Location not found for the provided coordinates' });
      }

      console.log(`Fetching forecast for gridId: ${pointProperties.gridId}, gridX: ${pointProperties.gridX}, gridY: ${pointProperties.gridY}`);
      const forecastProperties = await this.weatherService.getForecast(pointProperties);
      console.log('Forecast data retrieved:', forecastProperties);

      // No Data/Content found
      if (!forecastProperties || !forecastProperties.periods?.length) {
        console.error('No forecast data available for the provided location');
        return res.status(204).send();
      }

      // Get today's forecast (assuming the first period is today's forecast)
      const todayPeriod: Gridpoint12hForecastPeriod = forecastProperties.periods?.[0]!;
      console.log('Today\'s forecast period:', todayPeriod);

      // Respond with today's forecast details
      return res.status(200).json({
        temperature: todayPeriod.temperature,
        windSpeed: todayPeriod.windSpeed,
        windDirection: todayPeriod.windDirection,
        shortForecast: todayPeriod.shortForecast,
        detailedForecast: todayPeriod.detailedForecast,
      });
    } catch (error: any) {
      console.error('Error fetching today forecast:', error);

      if (error.response?.status === 500) {
        console.error('Internal Server Error from weather service');
        return res.status(500).json({ error: 'Internal Server Error' });
      }

      if (error.response?.status >= 500) {
        console.error('Weather service is unavailable');
        return res.status(502).json({ error: 'Weather service is unavailable' });
      }

      if (error.response?.status === 429) {
        console.error('Request limit exceeded');
        return res.status(429).json({ error: 'Your request limit exceeded' });
      }

      return res.status(500).json({ error: 'Unexpected error occurred' });
    }
  }
}
