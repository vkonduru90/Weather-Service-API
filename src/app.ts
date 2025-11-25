import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import { WeatherRouter } from './routes/weather.router';
import { notFoundHandler } from './middleware/notFound';
import { errorHandler } from './middleware/errorHandler';

export class App {
  public app: Application;

  constructor() {
    this.app = express();
    this.initializeMiddlewares();
    this.initializeRoutes();
    this.initializeErrorHandling();
  }

  private initializeMiddlewares(): void {
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(helmet());
  }

  private initializeRoutes(): void {
    // Health check
    this.app.get('/health', (_req: Request, res: Response) => {
      res.status(200).json({ status: 'ok' });
    });

    // Weather routes
    const weatherRouter = new WeatherRouter();
    this.app.use('/api/v1/weather', weatherRouter.router);
  }

  private initializeErrorHandling(): void {
    this.app.use(notFoundHandler); // 404 handler
    this.app.use(errorHandler); // global error handler
  }

  public listen(port: number): void {
    this.app.listen(port, () => {
      console.log(`Server listening on http://localhost:${port}`);
    });
  }
}

export default App;
