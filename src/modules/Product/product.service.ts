import ProductRepository from './product.repository';
import { IProductCreate } from './product.interface';
import FeedstockRepository from '../Feedstock/feedstock.repository';

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
      String(product.production_procedure[0].feedstock_id),
    );

    const feedStockSku = feedStock.sku;

    return `${feedStockSku}${productCode}`;
  }

  async generateCost(
    product,
    otherTransactions: Array<number>,
  ): Promise<number> {
    const feedstocksTransaction: Array<number> = product.feedstock_id;
    const suppliesTransaction: Array<number> = product.supplies_id;
    const machinesTransaction: Array<number> = product.machines_id;
    const otherTransaction: Array<number> = otherTransactions;

    // const productsTransaction: Array<number> = product.products_id;
    // const employeersTransaction: Array<number> = product.employeers_id;
    // const logisticsTransaction: Array<number> = product.logistics_id;
    // const metaproductsTransaction: Array<number> = product.metaproducts_id;

    const cost =
      feedstocksTransaction.reduce((a, b) => a + b)[0] +
      suppliesTransaction.reduce((a, b) => a + b)[0] +
      machinesTransaction.reduce((a, b) => a + b)[0] +
      machinesTransaction.reduce((a, b) => a + b)[0] +
      otherTransaction.reduce((a, b) => a + b)[0];

    return cost;
  }
}

export default new ProductService();
