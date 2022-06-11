import Xxxx from './Xxxx/xxxx.controller';

class Routes {
  constructor() {
    this.xxxx('/xxxx');
  }

  xxxx(baseRoute): void {
    this.route.post(`${baseRoute}/store`, Xxxx.store);
    this.route.get(`${baseRoute}/index/:id`, Xxxx.index);
    this.route.get(`${baseRoute}/show`, Xxxx.show);
    this.route.delete(`${baseRoute}/delete/:id`, Xxxx.delete);
    this.route.put(`${baseRoute}/update/:id`, Xxxx.update);
  }
}
