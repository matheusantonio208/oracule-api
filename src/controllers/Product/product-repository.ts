import { Document } from 'mongoose';

import Product from '../../schemas/Product';

import { ProductCreateDto } from './dto/product-create-dto';
import { IProduct } from './product-interface';

class ProductRepository {
  async create(product: ProductCreateDto): Promise<Document<IProduct>> {
    const productCreate = new Product(product);

    if (await productCreate.save()) {
      return productCreate;
    }

    throw new Error(`Error to create product`);
  }
}

export default new ProductRepository();
