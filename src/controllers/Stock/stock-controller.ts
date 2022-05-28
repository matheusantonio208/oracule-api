import { Document } from 'mongoose';
import { IRequest, IResponse } from '../../@types';

import { StockCreateDto } from './dto/stock-create-dto';
import { IStock } from './stock-interface';
import StockRepository from './stock-repository';

class StockController {
  async store(req: IRequest, res: IResponse) {
    try {
      const stockCreateDto: StockCreateDto = new StockCreateDto(req.body);
      const stockCreated: Document<IStock> = await StockRepository.create(
        stockCreateDto,
      );

      return res
        .status(201)
        .json({ success_msg: `Success! Your object is ${stockCreated}` });
    } catch (error) {
      return res.status(401).json({ error_msg: `Error! ${error}` });
    }
  }
}

export default new StockController();
