import { Router } from 'express';
import multer, { memoryStorage } from 'multer';

import AdRoute from './Ad/ad.routes';
import CategoryRoute from './Category/category.routes';
import CompanyRoute from './Company/company.routes';
import CustomerRoute from './Customer/customer.routes';
import EanRoute from './Ean/ean.routes';
import EmployeeRoute from './Employee/employee.routes';
import FeedstockRoute from './Feedstock/feedstock.routes';
import FileRoute from './File/file.routes';
import MachineRoute from './Machine/machine.routes';
import OrderRoute from './Order/order.routes';
import PersonRoute from './Person/person.routes';
import ProductRoute from './Product/product.routes';
import PromotionRoute from './Promotion/promotion.routes';
import ProviderRoute from './Provider/provider.routes';
import ShopRoute from './Shop/shop.routes';
import StockRoute from './Stock/stock.routes';
import SuppliesRoute from './Supplies/supplies.routes';
import TransactionRoute from './Transaction/transaction.routes';

class Routes {
  route: Router;

  uploadMiddleware: any;

  constructor() {
    this.route = Router();
    this.uploadMiddleware = (fields) =>
      multer({ storage: memoryStorage() }).fields(fields);

    FileRoute(
      this.route,
      '/file',
      this.uploadMiddleware([
        { name: 'mockup_frente', maxCount: 1 },
        { name: 'mockup_verso', maxCount: 1 },
      ]),
    );

    AdRoute(this.route, '/ad');
    CategoryRoute(this.route, '/category');
    CompanyRoute(this.route, '/company');
    CustomerRoute(this.route, '/customer');
    EanRoute(this.route, '/ean');
    EmployeeRoute(this.route, '/employee');
    FeedstockRoute(this.route, '/feedstock');
    MachineRoute(this.route, '/machine');
    OrderRoute(this.route, '/order');
    PersonRoute(this.route, '/person');
    ProductRoute(this.route, '/product');
    PromotionRoute(this.route, '/promotion');
    ProviderRoute(this.route, '/provider');
    ShopRoute(this.route, '/shop');
    StockRoute(this.route, '/stock');
    SuppliesRoute(this.route, '/supplies');
    TransactionRoute(this.route, '/transaction');
  }
}
export default new Routes().route;
