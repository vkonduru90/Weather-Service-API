import { Router } from 'express';
import { WeatherController } from '../controllers/weather.controller';

export class WeatherRouter {
  public router: Router;
  private weatherController: WeatherController;

  constructor() {
    this.router = Router();
    this.weatherController = new WeatherController();
    this.initializeRoutes();
  }

  private initializeRoutes() {
    /**
     * @swagger
     * /weather/today:
     *   get:
     *     summary: Get today's weather forecast
     *     description: Returns today's weather forecast for a given latitude and longitude
     *     tags:
     *       - Weather
     *     parameters:
     *       - in: query
     *         name: latitude
     *         required: true
     *         schema:
     *           type: number
     *         description: Latitude of the location
     *       - in: query
     *         name: longitude
     *         required: true
     *         schema:
     *           type: number
     *         description: Longitude of the location
     *     responses:
     *       200:
     *         description: Forecast retrieved successfully
     *         content:
     *           application/json:
     *             schema:
     *               type: object
     *               properties:
     *                 temperature:
     *                   type: number
     *                 windSpeed:
     *                   type: string
     *                 windDirection:
     *                   type: string
     *                 shortForecast:
     *                   type: string
     *                 detailedForecast:
     *                   type: string
     *       400:
     *         description: Missing latitude or longitude
     *       422:
     *         description: Invalid latitude or longitude
     *       404:
     *         description: Location not found
     *       204:
     *         description: No forecast data available
     *       500:
     *         description: Internal server error
     */
    this.router.get('/today', this.weatherController.getTodayForecast);
  }
}
