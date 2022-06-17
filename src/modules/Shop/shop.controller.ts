import { IRequest, IResponse } from '../../@types';

import {
  ShopToCreateDto,
  ShopCreatingDto,
  ShopCreatedDto,
  ShopToUpdateDto,
} from './dto/index.dto';

import shopRepository from './shop.repository';

import shopService from './shop.service';

class ShopController {
  async store(req: IRequest, res: IResponse) {
    try {
      // === Get Vars === //
      const shop: ShopToCreateDto = new ShopToCreateDto(req.body);

      // === Generate Vars === //
      const shopProperty: number = await shopService.serviceFunction();

      // === Create Dto === //
      const shopCreatingDto: ShopCreatingDto = new ShopCreatingDto({
        ...shop,
        //code: shopCode
      });

      // === Create Object === //
      const shopCreated: ShopCreatedDto = await shopRepository.create(
        shopCreatingDto,
      );

      return res.status(201).json(shopCreated);
    } catch (error) {
      return res.status(401).json({ error_msg: `Error! ${error}` });
    }
  }

  async index(req: IRequest, res: IResponse) {
    try {
      const { id } = req.params;

      const shop: ShopCreatedDto = await shopRepository.getOneById(id);

      return res.status(201).json(shop);
    } catch (error) {
      return res.status(401).json({ error_msg: `Error! ${error}` });
    }
  }

  async show(req: IRequest, res: IResponse) {
    try {
      const { property, sort, itensPerPage, pagination } = req.query;

      const shop: Array<ShopCreatedDto> = await shopRepository.listAll(
        property,
        sort,
        itensPerPage,
        pagination,
      );

      return res.status(201).json(shop);
    } catch (error) {
      return res.status(401).json({ error_msg: `Error! ${error}` });
    }
  }

  async delete(req: IRequest, res: IResponse) {
    try {
      const { id } = req.params;

      await shopRepository.deleteById(id);

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
      const data: ShopToUpdateDto = new ShopToUpdateDto(req.body);

      const shopUpdated: ShopCreatedDto = await shopRepository.updateById(
        id,
        data,
      );

      return res.status(201).json(shopUpdated);
    } catch (error) {
      return res.status(401).json({ error_msg: `Error! ${error}` });
    }
  }
}

export default new ShopController();
