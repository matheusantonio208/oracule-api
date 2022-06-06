import { Document } from 'mongoose';
import { IRequest, IResponse } from '../../@types';
import { ProductCreateDto } from './dto/product-create.dto';
import { IProduct } from './product.interface';
import ProductRepository from './product.repository';
import ProductService from './product.service';

class ProductController {
  async store(req: IRequest, res: IResponse) {
    try {
      const product: ProductCreateDto = new ProductCreateDto(req.body);
      const productCode = await ProductService.generateProductCode();
      const productSku = await ProductService.generateSku(product, productCode);
      const productCost = await ProductService.generatePrice(product);

      const productCreated: Document<IProduct> = await ProductRepository.create(
        {
          ...product,
          product_code: productCode,
          sku: productSku,
          production_cost: productCost,
        },
      );

      return res.status(201).json({
        success_msg: `Success! Your product was created`,
        productCreated,
      });
    } catch (error) {
      return res.status(401).json({ error_msg: `Error! ${error}` });
    }
  }

  async index(req: IRequest, res: IResponse) {
    try {
      const { id } = req.params;

      const product: Document<IProduct> = await ProductRepository.getOneById(
        id,
      );

      return res.status(201).json(product);
    } catch (error) {
      return res.status(401).json({ error_msg: `Error! ${error}` });
    }
  }

  async show(req: IRequest, res: IResponse) {
    try {
      const product: Array<Document<IProduct>> =
        await ProductRepository.listAll();

      return res.status(201).json(product);
    } catch (error) {
      return res.status(401).json({ error_msg: `Error! ${error}` });
    }
  }

  async delete(req: IRequest, res: IResponse) {
    try {
      const { id } = req.params;

      await ProductRepository.deleteById(id);

      return res
        .status(201)
        .json({ success_msg: `Success! Your product was deleted` });
    } catch (error) {
      return res.status(401).json({ error_msg: `Error! ${error}` });
    }
  }

  async update(req: IRequest, res: IResponse) {
    try {
      const { id } = req.params;
      const data = req.body;

      const productUpdated = await ProductRepository.updateById(id, data);

      return res.status(201).json(productUpdated);
    } catch (error) {
      return res.status(401).json({ error_msg: `Error! ${error}` });
    }
  }
}

export default new ProductController();
