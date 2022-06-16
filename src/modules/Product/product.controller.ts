import { IRequest, IResponse } from '../../@types';
import {
  ProductToCreateDto,
  ProductCreatingDto,
  ProductCreatedDto,
} from './dto/index.dto';
import ProductRepository from './product.repository';
import ProductService from './product.service';

class ProductController {
  async store(req: IRequest, res: IResponse) {
    try {
      const { other_transactions } = req.body;

      const product: ProductToCreateDto = new ProductToCreateDto(req.body);

      const productCode: string = await ProductService.generateProductCode();
      const productSku: string = await ProductService.generateSku(
        product,
        productCode,
      );
      const productCost: number = await ProductService.generateProductionCost(
        product,
        other_transactions,
      );

      //=== Upload Images Minify ===
      //=== Upload Files ===

      const productCreating: ProductCreatingDto = new ProductCreatingDto({
        ...product,
        product_code: productCode,
        sku: productSku,
        production_cost: productCost,
      });

      const productCreated: ProductCreatedDto = await ProductRepository.create(
        productCreating,
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

      const product: ProductCreatedDto = await ProductRepository.getOneById(id);

      return res.status(201).json(product);
    } catch (error) {
      return res.status(401).json({ error_msg: `Error! ${error}` });
    }
  }

  async show(req: IRequest, res: IResponse) {
    try {
      const { key, sort, itensPerPage, pagination } = req.params;
      const product: Array<ProductCreatedDto> = await ProductRepository.listAll(
        key,
        sort,
        itensPerPage,
        pagination,
      );

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
