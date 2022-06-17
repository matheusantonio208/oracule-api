import { Schema } from 'mongoose';

import Shop from '../../schemas/Shop';
import {
  ShopCreatingDto,
  ShopCreatedDto,
  ShopToUpdateDto,
} from './dto/index.dto';

class ShopRepository {
  async create(shop: ShopCreatingDto): Promise<ShopCreatedDto> {
    const shopCreate = new Shop(shop);

    if (await shopCreate.save()) {
      return shopCreate;
    }

    throw new Error(`Error to create shop`);
  }

  async getOneById(id: Schema.Types.ObjectId): Promise<ShopCreatedDto> {
    const shop: ShopCreatedDto = await Shop.findById(id);
    if (shop) return shop;

    throw new Error(`Error to get shop`);
  }

  async listAll(
    property: string,
    sort: string,
    itensPerPage: number,
    pagination: number,
  ): Promise<Array<ShopCreatedDto>> {
    const shops: Array<ShopCreatedDto> = await Shop.find({}, (error, docs) => {
      if (!error) return docs;
      throw error;
    })
      .sort([[property, sort]])
      .skip(pagination)
      .limit(itensPerPage)
      .exec();

    if (shops) return shops;

    throw new Error(`Error to list categories`);
  }

  async updateById(
    id: Schema.Types.ObjectId,
    data: ShopToUpdateDto,
  ): Promise<ShopCreatedDto> {
    const updatedShop: ShopCreatedDto = await Shop.findByIdAndUpdate(
      id,
      data,
      (error, document) => {
        if (!error) return document;
        throw error;
      },
    );

    if (updatedShop) return updatedShop;

    throw new Error(`Error to update shop`);
  }

  async deleteById(id: Schema.Types.ObjectId): Promise<Boolean> {
    if (await Shop.deleteOne({ _id: id })) return true;

    throw new Error(`Error to delete shop`);
  }
}

export default new ShopRepository();
