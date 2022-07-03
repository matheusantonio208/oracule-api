import { Schema } from 'mongoose';

import Product from '../../schemas/Product';
import {
  ProductCreatingDto,
  ProductCreatedDto,
  ProductToUpdateDto,
} from './dto/index.dto';

class ProductRepository {
  async create(product: ProductCreatingDto): Promise<ProductCreatedDto> {
    const productCreate = new Product(product);

    if (await productCreate.save()) {
      return productCreate;
    }

    throw new Error(`Error to create product`);
  }

  async getOneById(id: Schema.Types.ObjectId): Promise<ProductCreatedDto> {
    const product: ProductCreatedDto = await Product.findById(id);
    if (product) return product;

    throw new Error(`Error to get product`);
  }

  async listAll(
    property: string,
    sort: string,
    itensPerPage: number,
    pagination: number,
  ): Promise<Array<ProductCreatedDto>> {
    const products: Array<ProductCreatedDto> = await Product.find(
      {},
      (error, docs) => {
        if (!error) return docs;
      },
    )
      .sort([[property, sort]])
      .skip(pagination)
      .limit(itensPerPage)
      .exec();

    if (products) return products;

    throw new Error(`Error to list categories`);
  }

  async updateById(
    id: Schema.Types.ObjectId,
    data: ProductToUpdateDto,
  ): Promise<ProductCreatedDto> {
    const updatedProduct: ProductCreatedDto = await Product.findByIdAndUpdate(
      id,
      data,
      (error, document) => {
        if (!error) return document;
        throw error;
      },
    );

    if (updatedProduct) return updatedProduct;

    throw new Error(`Error to update ad`);
  }

  async deleteById(id: Schema.Types.ObjectId): Promise<Boolean> {
    if (await Product.deleteOne({ _id: id })) return true;

    throw new Error(`Error to delete product`);
  }
}

export default new ProductRepository();
