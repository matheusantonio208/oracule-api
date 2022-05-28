import { Router } from 'express';
import adService from './Ad/ad-service';

class Routes {
  route: any;
  constructor() {
    this.route = Router();

    this.exampleRoute('/');
  }

  exampleRoute(baseRoute) {
    this.route.get(`${baseRoute}`, async (req, res) => {
      const ean = await adService.generateTitles(
        ['Caneca', 'Xícara'],
        ['Cerâmica', 'Porcelana'],
        ['Avatar', 'A lenda de eng'],
        ['Poster'],
        ['Azul', 'Verde'],
        ['Filmes', 'Anime'],
        60,
      );

      return res.status(200).json({
        success_msg: `${ean}`,
      });
    });

    this.route.post(`${baseRoute}/db`, (req, res) => {
      return res.status(201).json({ success_msg: 'Already!' });
    });
  }
}

export default new Routes().route;
