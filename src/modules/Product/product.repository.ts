import { Schema } from 'mongoose';

import Product from '../../schemas/Product';

import {
  ProductCreatedDto,
  ProductCreateDto,
  ProductUpdateDto,
} from './dto/index.dto';

class ProductRepository {
  async create(product: ProductCreateDto): Promise<ProductCreatedDto> {
    const productCreate = new Product(product);

    if (await productCreate.save()) return productCreate;

    throw new Error(`Error to create product`);
  }

  async getOneById(id: Schema.Types.ObjectId): Promise<ProductCreatedDto> {
    const product = await Product.findById(id);

    if (product) return product;

    throw new Error(`Error to get product`);
  }

  async listAll(): Promise<Array<ProductCreatedDto>> {
    const products = await Product.find();

    if (products) return products;

    throw new Error(`Error to list products`);
  }

  async updateById(
    id: Schema.Types.ObjectId,
    data: ProductUpdateDto,
  ): Promise<ProductCreatedDto> {
    const updatedProduct = await Product.findByIdAndUpdate(id, data);

    if (updatedProduct) return updatedProduct;

    throw new Error(`Error to update product`);
  }

  async deleteById(id: Schema.Types.ObjectId): Promise<Boolean> {
    if (await Product.deleteOne({ _id: id })) return true;

    throw new Error(`Error to delete product`);
  }
}

export default new ProductRepository();
