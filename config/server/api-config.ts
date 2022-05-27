import '#config/env-loader.js';
import cors from 'cors';
import express from 'express';
import * as core from 'express-serve-static-core';

import DatabaseDB from '#config/db-mongo/mongo-connect.js';
import YouchLogs from '#config/debug/youch-config.js';

import routes from '#controllers/routes-api.js';

class ApiConfig {
  server: core.Express;

  constructor() {
    this.server = express();

    this.middlewares();
    this.routes();

    DatabaseDB.start();
  }

  middlewares(): void {
    this.server.use(cors());
    this.server.use(YouchLogs);
    this.server.use(express.json());
  }

  routes(): void {
    this.server.use(routes);
  }
}

export default new ApiConfig().server;
