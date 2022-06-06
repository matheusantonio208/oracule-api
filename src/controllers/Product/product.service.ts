import { Document } from 'mongoose';
import ProductRepository from './product.repository';
import { IProduct, IProductCreate } from './product.interface';
import FeedstockRepository from '../Feedstock/feedstock.repository';
import { IFeedstock } from '../Feedstock/feedstock.interface';

class ProductService {
  async generateProductCode() {
    const products = await ProductRepository.listAll();
    if (products.length > 0) {
      const lastProductCode =
        products[Object.keys(products).sort().pop()].product_code;
      return lastProductCode + 1;
    }

    return 0;
  }

  async generateSku(product: IProductCreate, productCode): Promise<any> {
    const feedStock = await FeedstockRepository.getOneById(
      String(product.feedstock_id),
    );

    const feedStockSku = feedStock.sku;

    return `${feedStockSku}${productCode}`;
  }

  async generatePrice(product): Promise<number> {
    return 10;
    console.log('Soma o preço de custo');
  }
}

export default new ProductService();
