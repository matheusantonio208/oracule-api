import ProductRepository from './product.repository';
import FeedstockRepository from '../Feedstock/feedstock.repository';

class ProductService {
  async generateProductCode() {
    const products = await ProductRepository.listAll(
      'product_code',
      'asc',
      null,
      null,
    );

    if (products.length > 0) {
      const lastProductCode = Number(
        products[Object.keys(products).sort().pop()].product_code,
      );
      const productCode = String(lastProductCode + 1).padStart(4, '0');

      return productCode;
    }

    return '0000';
  }

  async generateSku(product, productCode): Promise<any> {
    const feedStock = await FeedstockRepository.getOneById(
      product.production_procedure[0].feedstock_id,
    );

    const feedStockSku = feedStock.sku;

    return `${feedStockSku}${productCode}`;
  }

  generateProductionCost(product, otherTransactions: Array<number>): number {
    const feedstocksTransaction: Array<number> = product.feedstock_id;
    const suppliesTransaction: Array<number> = product.supply;
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
