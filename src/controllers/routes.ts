import { Router } from 'express';
import multer, { memoryStorage } from 'multer';
import Product from './Product/product.controller';
import Category from './Category/category.controller';
import File from './File/file.controller';

class Routes {
  route: any;
  uploadMiddleware: any;

  constructor() {
    this.route = Router();

    this.uploadMiddleware = multer(memoryStorage()).single('file');

    this.product('/product');
    this.category('/category');
    this.file('/file');
  }

  product(baseRoute): void {
    this.route.post(`${baseRoute}/create`, Product.store);
    this.route.get(`${baseRoute}/:id`, Product.index);
    this.route.get(`${baseRoute}/list`, Product.show);
    this.route.delete(`${baseRoute}/:id`, Product.delete);
    this.route.put(`${baseRoute}/:id`, Product.update);
  }

  category(baseRoute): void {
    this.route.post(`${baseRoute}/create`, Category.store);
    this.route.get(`${baseRoute}/:id`, Category.index);
    this.route.get(`${baseRoute}/list/all-categories`, Category.show);
    this.route.delete(`${baseRoute}/:id`, Category.delete);
    this.route.put(`${baseRoute}/:id`, Category.update);
  }

  file(baseRoute): void {
    this.route.post(`${baseRoute}/upload`, this.uploadMiddleware, File.store);
    this.route.get(`${baseRoute}/:name`, File.index);
    this.route.get(`${baseRoute}/list/all-file`, File.show);
    this.route.delete(`${baseRoute}/:id`, File.delete);
    this.route.put(`${baseRoute}/:id`, File.update);
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
}
export default new Routes().route;
