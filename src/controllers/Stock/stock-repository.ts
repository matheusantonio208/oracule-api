import { Document } from 'mongoose';

import Stock from '../../schemas/Stock';

import { StockCreateDto } from './dto/stock-create-dto';
import { IStock } from './stock-interface';

class StockRepository {
  async create(stock: StockCreateDto): Promise<Document<IStock>> {
    const stockCreate = new Stock(stock);

    if (await stockCreate.save()) {
      return stockCreate;
    }

    throw new Error(`Error to create`);
  }
}

export default new StockRepository();
