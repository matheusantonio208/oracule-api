import { Document } from 'mongoose';

import Shop from '../../schemas/Shop';

import { ShopCreateDto } from './dto/shop-create.dto';
import { IShop } from './shop.interface';

class ShopRepository {
  async create(shop: ShopCreateDto): Promise<Document<IShop>> {
    const shopCreate = new Shop(shop);

    if (await shopCreate.save()) {
      return shopCreate;
    }

    throw new Error(`Error to create shop`);
  }

  async getOneById(id: string): Promise<Document<IShop>> {
    const shop: Document<IShop> = await Shop.findById(id);
    if (shop) return shop;

    throw new Error(`Error to get shop`);
  }

  async listAll(): Promise<Array<Document<IShop>>> {
    const shops: Array<Document<IShop>> = await Shop.find({}, (err, docs) => {
      if (!err) return docs;
    });

    if (shops) return shops;

    throw new Error(`Error to list categories`);
  }

  async updateById(id: string, data: any): Promise<Document<IShop>> {
    const updatedShop: Document<IShop> = await Shop.findByIdAndUpdate(
      id,
      data,
      (error, document) => {
        if (!error) return document;
      },
    );

    if (updatedShop) return updatedShop;

    throw new Error(`Error to update shop`);
  }

  async deleteById(id: string): Promise<Boolean> {
    if (await Shop.deleteOne({ _id: id })) return true;

    throw new Error(`Error to delete shop`);
  }
}

export default new ShopRepository();
