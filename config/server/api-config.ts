import '#config/env-loader.js';
import cors from 'cors';
import express, { Express } from 'express';

import DatabaseDB from '#config/db-mongo/mongo-connect.js';
import YouchLogs from '#config/debug/youch-config.js';

import routes from '#controllers/routes-api.js';

class ApiConfig {
  server: Express;

  constructor() {
    this.server = express();

    this.middlewares();
    this.routes();

    DatabaseDB.start();
  }

  middlewares(): void {
    this.server.use(cors());
    this.server.use(YouchLogs);
    this.server.use(express.json);
  }

  routes(): void {
    this.server.use(routes);
  }
}

export default new ApiConfig().server;
