import { Router } from 'express';

class FileRoutes {
  route: any;

  constructor() {
    this.route = Router();
  }

  routes(baseUrl: string, middleware?: any): void {}
}
