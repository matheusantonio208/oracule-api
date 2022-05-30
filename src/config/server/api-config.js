import '../env-loader.js';
import express from 'express';
import cors from 'cors';
import YouchLogs from '../debug/youch-config.js';

import MongoDB from '../db-mongo/mongo-connect';

import routes from '../../controllers/routes';

class ApiConfig {
  constructor() {
    this.server = express();

    this.middlewares();
    this.routes();

    MongoDB.start();
  }

  middlewares() {
    this.server.use(cors());
    this.server.use(YouchLogs);
    this.server.use(express.json());
  }

  routes() {
    this.server.use(routes);
  }
}

export default new ApiConfig().server;
