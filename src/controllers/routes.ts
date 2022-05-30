import { Router } from 'express';
import adService from './Ad/ad.service';

class Routes {
  route: any;
  constructor() {
    this.route = Router();

    this.exampleRoute('/');
  }

  exampleRoute(baseRoute) {
    this.route.get(`${baseRoute}`, async (req, res) => {
      const ean = await adService.generateTitles(
        ['Caneca', 'Xícara', 'Copo'],
        ['Cerâmica', 'Porcelana', 'Vidro'],
        ['Superman', 'DC', 'Super Homem'],
        ['Rosto', 'Face'],
        ['Azul Claro', 'Azul Escuro'],
        ['Filmes', 'Série', 'HQ', 'Quadrinhos', 'Premium'],
        60,
        30,
      );

      return res.status(200).json({
        success_msg: ean,
        qtd: ean.length,
      });
    });

    this.route.post(`${baseRoute}/db`, (req, res) => {
      return res.status(201).json({ success_msg: 'Already!' });
    });
  }
}

export default new Routes().route;
