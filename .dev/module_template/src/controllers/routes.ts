import Xxxx from './Xxxx/xxxx.controller';

class Routes {
  constructor() {
    this.xxxx('/xxxx');
  }

  xxxx(baseRoute) {
    this.route.post(`${baseRoute}/create`, Xxxx.store);
    this.route.get(`${baseRoute}/:id`, Xxxx.index);
    this.route.get(`${baseRoute}/list/all-xxxx`, Xxxx.show);
    this.route.delete(`${baseRoute}/:id`, Xxxx.delete);
    this.route.put(`${baseRoute}/:id`, Xxxx.update);
  }
}
