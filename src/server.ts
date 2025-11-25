import dotenv from "dotenv";
dotenv.config();

import App from "./app";

class Server {
  private app: App;
  private port: number;

  constructor() {
    this.app = new App();
    this.port = process.env.PORT ? parseInt(process.env.PORT) : 3000;
  }

  public start(): void {
    this.app.listen(this.port);
  }
}

// Instantiate and start the server
const server = new Server();
server.start();
