import { Schema } from 'mongoose';
import Stock from '../../schemas/Stock';

import {
  StockCreatingDto,
  StockCreatedDto,
  StockToUpdateDto,
} from './dto/index.dto';

class StockRepository {
  async create(stock: StockCreatingDto): Promise<StockCreatedDto> {
    const stockCreate = new Stock(stock);

    if (await stockCreate.save()) {
      return stockCreate;
    }

    throw new Error(`Error to create stock`);
  }

  async getOneById(id: Schema.Types.ObjectId): Promise<StockCreatedDto> {
    const stock: StockCreatedDto = await Stock.findById(id);
    if (stock) return stock;

    throw new Error(`Error to get stock`);
  }

  async listAll(
    property: string,
    sort: string,
    itensPerPage: number,
    pagination: number,
  ): Promise<Array<StockCreatedDto>> {
    const stocks: Array<StockCreatedDto> = await Stock.find({}, (err, docs) => {
      if (!err) return docs;
    })
      .sort([[property, sort]])
      .skip(pagination)
      .limit(itensPerPage)
      .exec();

    if (stocks) return stocks;

    throw new Error(`Error to list categories`);
  }

  async updateById(
    id: Schema.Types.ObjectId,
    data: StockToUpdateDto,
  ): Promise<StockCreatedDto> {
    const updatedStock: StockCreatedDto = await Stock.findByIdAndUpdate(
      id,
      data,
      (error, document) => {
        if (!error) return document;
      },
    );

    if (updatedStock) return updatedStock;

    throw new Error(`Error to update stock`);
  }

  async deleteById(id: Schema.Types.ObjectId): Promise<Boolean> {
    if (await Stock.deleteOne({ _id: id })) return true;

    throw new Error(`Error to delete stock`);
  }
}

export default new StockRepository();
