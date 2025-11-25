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
    this.router.get('/today', this.weatherController.getTodayForecast);
  }
}
