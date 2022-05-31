import { Document } from 'mongoose';

import Product from '../../schemas/Product';

import { ProductCreateDto } from './dto/product-create.dto';
import { IProduct } from './product.interface';

class ProductRepository {
  async create(product: ProductCreateDto): Promise<Document<IProduct>> {
    const productCreate = new Product(product);

    if (await productCreate.save()) {
      return productCreate;
    }

    throw new Error(`Error to create product`);
  }

  async getOneById(id: string): Promise<Document<IProduct>> {
    const product = await Product.findById(id);
    if (product) return product;

    throw new Error(`Error to get product`);
  }

  async listAll(): Promise<Array<Document<IProduct>>> {
    const products = await Product.find();

    if (products) return products;

    throw new Error(`Error to list products`);
  }

  async updateById(id: string, data: any): Promise<Document<IProduct>> {
    const updatedProduct = await Product.findByIdAndUpdate(id, data);
    if (updatedProduct) return updatedProduct;

    throw new Error(`Error to update product`);
  }

  async deleteById(id: string): Promise<Boolean> {
    if (await Product.deleteOne({ _id: id })) return true;

    throw new Error(`Error to delete product`);
  }
}

export default new ProductRepository();
