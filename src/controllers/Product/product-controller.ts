import { Document } from 'mongoose';
import { IRequest, IResponse } from '../../@types';

import { ProductCreateDto } from './dto/product-create-dto';
import { IProduct } from './product-interface';
import ProductRepository from './product-repository';

class ProductController {
  async store(req: IRequest, res: IResponse) {
    try {
      const productCreateDto: ProductCreateDto = new ProductCreateDto(req.body);
      const productCreated: Document<IProduct> = await ProductRepository.create(
        productCreateDto,
      );

      return res
        .status(201)
        .json({ success_msg: `Success! Your object is ${productCreated}` });
    } catch (error) {
      return res.status(401).json({ error_msg: `Error! ${error}` });
    }
  }
}

export default new ProductController();
