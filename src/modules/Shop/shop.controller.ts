import { IRequest, IResponse } from '../../@types';

import { shopCreatedDto } from './dto/index.dto';
import { IShop } from './shop.interface';
import ShopRepository from './shop.repository';

class ShopController {
  async store(req: IRequest, res: IResponse) {
    try {
      const shopCreateDto: shopCreatedDto = new shopCreatedDto(req.body);

      const shopCreated: IShop = await ShopRepository.create(shopCreateDto);

      return res.status(201).json(shopCreated);
    } catch (error) {
      return res.status(401).json({ error_msg: `Error! ${error}` });
    }
  }

  async index(req: IRequest, res: IResponse) {
    try {
      const { id } = req.params;

      const shop: IShop = await ShopRepository.getOneById(id);

      return res.status(201).json(shop);
    } catch (error) {
      return res.status(401).json({ error_msg: `Error! ${error}` });
    }
  }

  async show(req: IRequest, res: IResponse) {
    try {
      const shop: Array<IShop> = await ShopRepository.listAll();

      return res.status(201).json(shop);
    } catch (error) {
      return res.status(401).json({ error_msg: `Error! ${error}` });
    }
  }

  async delete(req: IRequest, res: IResponse) {
    try {
      const { id } = req.params;

      await ShopRepository.deleteById(id);

      return res
        .status(201)
        .json({ success_msg: `Success! Your shop was deleted` });
    } catch (error) {
      return res.status(401).json({ error_msg: `Error! ${error}` });
    }
  }

  async update(req: IRequest, res: IResponse) {
    try {
      const { id } = req.params;
      const data = req.body;

      const shopUpdated = await ShopRepository.updateById(id, data);

      return res.status(201).json(shopUpdated);
    } catch (error) {
      return res.status(401).json({ error_msg: `Error! ${error}` });
    }
  }
}

export default new ShopController();