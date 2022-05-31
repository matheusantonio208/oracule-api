import { Router } from 'express';
import Product from './Product/product.controller';
import Category from './Category/category.controller';

class Routes {
  route: any;
  constructor() {
    this.route = Router();

    this.product('/product');
    this.category('/category');
  }

  product(baseRoute) {
    this.route.post(`${baseRoute}/create`, Product.store);
    this.route.get(`${baseRoute}/:id`, Product.index);
    this.route.get(`${baseRoute}/list`, Product.show);
    this.route.delete(`${baseRoute}/:id`, Product.delete);
    this.route.put(`${baseRoute}/:id`, Product.update);
  }

  category(baseRoute) {
    this.route.post(`${baseRoute}/create`, Category.store);
    this.route.get(`${baseRoute}/:id`, Category.index);
    this.route.get(`${baseRoute}/list/all-categories`, Category.show);
    this.route.delete(`${baseRoute}/:id`, Category.delete);
    this.route.put(`${baseRoute}/:id`, Category.update);
  }

  // exampleRoute(baseRoute) {
  //   this.route.get(`${baseRoute}`, async (req, res) => {
  //     const ean = await adService.generateTitles(
  //       ['Caneca', 'Xícara', 'Copo'],
  //       ['Cerâmica', 'Porcelana', 'Vidro'],
  //       ['Superman', 'DC', 'Super Homem'],
  //       ['Rosto', 'Face'],
  //       ['Azul Claro', 'Azul Escuro'],
  //       ['Filmes', 'Série', 'HQ', 'Quadrinhos', 'Premium'],
  //       60,
  //       30,
  //     );

  //     return res.status(200).json({
  //       success_msg: ean,
  //       qtd: ean.length,
  //     });
  //   });

  //   this.route.post(`${baseRoute}/db`, (req, res) => {
  //     return res.status(201).json({ success_msg: 'Already!' });
  //   });
}
export default new Routes().route;