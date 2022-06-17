import { Document } from 'mongoose';
import { IRequest, IResponse } from '../../@types';

import StockRepository from './stock.repository';

import {
  StockToCreateDto,
  StockCreatingDto,
  StockCreatedDto,
  StockToUpdateDto,
} from './dto/index.dto';

class StockController {
  async store(req: IRequest, res: IResponse) {
    try {
      const stockCreateDto: StockCreateDto = new StockCreateDto(req.body);

      const stockCreated: Document<IStock> = await StockRepository.create(
        stockCreateDto,
      );

      return res.status(201).json(stockCreated);
    } catch (error) {
      return res.status(401).json({ error_msg: `Error! ${error}` });
    }
  }

  async index(req: IRequest, res: IResponse) {
    try {
      const { id } = req.params;

      const stock: Document<IStock> = await StockRepository.getOneById(id);

      return res.status(201).json(stock);
    } catch (error) {
      return res.status(401).json({ error_msg: `Error! ${error}` });
    }
  }

  async show(req: IRequest, res: IResponse) {
    try {
      const stock: Array<Document<IStock>> = await StockRepository.listAll();

      return res.status(201).json(stock);
    } catch (error) {
      return res.status(401).json({ error_msg: `Error! ${error}` });
    }
  }

  async delete(req: IRequest, res: IResponse) {
    try {
      const { id } = req.params;

      await StockRepository.deleteById(id);

      return res
        .status(201)
        .json({ success_msg: `Success! Your stock was deleted` });
    } catch (error) {
      return res.status(401).json({ error_msg: `Error! ${error}` });
    }
  }

  async update(req: IRequest, res: IResponse) {
    try {
      const { id } = req.params;
      const data = req.body;

      const stockUpdated = await StockRepository.updateById(id, data);

      return res.status(201).json(stockUpdated);
    } catch (error) {
      return res.status(401).json({ error_msg: `Error! ${error}` });
    }
  }
}

export default new StockController();
