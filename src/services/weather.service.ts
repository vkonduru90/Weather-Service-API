import {
  DefaultApiFactory,
  Gridpoint12hForecast,
  Point,
  PointGeoJson,
} from '../openapi/generated';
import { AxiosResponse } from 'axios';

export class WeatherService {
  private weatherApi = DefaultApiFactory({
    basePath: process.env.WEATHER_BASE_URL,
    isJsonMime: (mime: string) => mime === 'application/json',
  });

  /**
   * Get location information for given latitude and longitude
   * @param latitude
   * @param longitude
   * @returns Point properties
   */
  public async getLocationInfo(latitude: number, longitude: number): Promise<Point> {
    try {
      const pointsResponse: AxiosResponse<PointGeoJson, any> = await this.weatherApi.point({
        latitude,
        longitude,
      });

      const properties: Point = pointsResponse.data.properties;
      return properties;
    } catch (error) {
      console.error('Error fetching location info:', error);
      throw error;
    }
  }

   /**
   * Get weather forecast for a given location
   * @param properties Point properties containing grid info
   * @returns Gridpoint12hForecast
   */
  public async getForecast(properties: Point): Promise<Gridpoint12hForecast> {
    try {
      const forecastResponse = await this.weatherApi.gridpointForecast({
        wfo: properties.gridId!,
        x: properties.gridX!,
        y: properties.gridY!,
      });

      const forecastProperties: Gridpoint12hForecast = forecastResponse.data.properties;
      return forecastProperties;
    } catch (error) {
      console.error('Error fetching forecast:', error);
      throw error;
    }
  }
}
