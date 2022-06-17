import { Document } from 'mongoose';

import Stock from '../../schemas/Stock';
import {
  StockToCreateDto,
  StockCreatingDto,
  StockCreatedDto,
  StockToUpdateDto,
} from './dto/index.dto';

class StockRepository {
  async create(stock: StockCreateDto): Promise<Document<IStock>> {
    const stockCreate = new Stock(stock);

    if (await stockCreate.save()) {
      return stockCreate;
    }

    throw new Error(`Error to create stock`);
  }

  async getOneById(id: Schema.Types.ObjectId;): Promise<Document<IStock>> {
    const stock: Document<IStock> = await Stock.findById(id);
    if (stock) return stock;

    throw new Error(`Error to get stock`);
  }

  async listAll(): Promise<Array<Document<IStock>>> {
    const stocks: Array<Document<IStock>> = await Stock.find(
      {},
      (err, docs) => {
        if (!err) return docs;
      },
    );

    if (stocks) return stocks;

    throw new Error(`Error to list categories`);
  }

  async updateById(id: Schema.Types.ObjectId;, data: any): Promise<Document<IStock>> {
    const updatedStock: Document<IStock> = await Stock.findByIdAndUpdate(
      id,
      data,
      (error, document) => {
        if (!error) return document;
      },
    );

    if (updatedStock) return updatedStock;

    throw new Error(`Error to update stock`);
  }

  async deleteById(id: Schema.Types.ObjectId;): Promise<Boolean> {
    if (await Stock.deleteOne({ _id: id })) return true;

    throw new Error(`Error to delete stock`);
  }
}

export default new StockRepository();
