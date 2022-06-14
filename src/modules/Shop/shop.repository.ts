import { Schema } from 'mongoose';

import Shop from '../../schemas/Shop';

import { ShopCreateDto } from './dto/shop-create.dto';
import { IShop } from './shop.interface';

class ShopRepository {
  async create(shop: ShopCreateDto): Promise<IShop> {
    const shopCreate = new Shop(shop);

    if (await shopCreate.save()) {
      return shopCreate;
    }

    throw new Error(`Error to create shop`);
  }

  async getOneById(id: Schema.Types.ObjectId): Promise<IShop> {
    const shop: IShop = await Shop.findById(id);
    if (shop) return shop;

    throw new Error(`Error to get shop`);
  }

  async listAll(): Promise<Array<IShop>> {
    const shops: Array<IShop> = await Shop.find({}, (err, docs) => {
      if (!err) return docs;
    });

    if (shops) return shops;

    throw new Error(`Error to list categories`);
  }

  async updateById(id: Schema.Types.ObjectId, data: any): Promise<IShop> {
    const updatedShop: IShop = await Shop.findByIdAndUpdate(
      id,
      data,
      (error, document) => {
        if (!error) return document;
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
