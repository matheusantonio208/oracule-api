import '../env-loader.js';
import cors from 'cors';
import express from 'express';

import routes from '../../modules/routes';
import MongoDB from '../db-mongo/mongo-connect';
import YouchLogs from '../debug/youch-config.js';

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
    this.server.use(express.static('public'));
  }

  routes() {
    this.server.use(routes);
  }
}

export default new ApiConfig().server;
