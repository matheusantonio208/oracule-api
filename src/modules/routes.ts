import { Router } from 'express';
import multer, { memoryStorage } from 'multer';

import Product from './Product/product.controller';
import Category from './Category/category.controller';
import File from './File/file.controller';
import Feedstock from './Feedstock/feedstock.controller';
import Transaction from './Transaction/transaction.controller';
import Person from './Person/person.controller';
import Provider from './Provider/provider.controller';
import Stock from './Stock/stock.controller';
import Machine from './Machine/machine.controller';
import Supplies from './Supplies/supplies.controller';
import Ad from './Ad/ad.controller';
import Shop from './Shop/shop.controller';
import Promotion from './Promotion/promotion.controller';
import Order from './Order/order.controller';
import Customer from './Customer/customer.controller';
import Employee from './Employee/employee.controller';
import Company from './Company/company.controller';
import Ean from './Ean/ean.controller';

class Routes {
  route: any;
  uploadMiddleware: any;

  constructor() {
    this.route = Router();

    this.uploadMiddleware = (fields) =>
      multer({ storage: memoryStorage() }).fields(fields);

    this.person('/person');
    this.provider('/provider');
    this.transaction('/transaction');
    this.stock('/stock');
    this.feedstock('/feedstock');
    this.machine('/machine');
    this.supplies('/supplies');
    this.category('/category');
    this.file('/file');
    this.product('/product');
    this.ad('/ad');
    this.shop('/shop');
    this.promotion('/promotion');
    this.order('/order');
    this.customer('/customer');
    this.employee('/employee');
    this.company('/company');
    this.ean('/ean');
  }

  person(baseRoute): void {
    this.route.post(`${baseRoute}/store`, Person.store);
    this.route.get(`${baseRoute}/index/:id`, Person.index);
    this.route.get(`${baseRoute}/show`, Person.show);
    this.route.delete(`${baseRoute}/delete/:id`, Person.delete);
    this.route.put(`${baseRoute}/update/:id`, Person.update);
  }

  provider(baseRoute): void {
    this.route.post(`${baseRoute}/store`, Provider.store);
    this.route.get(`${baseRoute}/index/:id`, Provider.index);
    this.route.get(`${baseRoute}/show`, Provider.show);
    this.route.delete(`${baseRoute}/delete/:id`, Provider.delete);
    this.route.put(`${baseRoute}/update/:id`, Provider.update);
  }

  transaction(baseRoute): void {
    this.route.post(`${baseRoute}/store`, Transaction.store);
    this.route.get(`${baseRoute}/index/:id`, Transaction.index);
    this.route.get(`${baseRoute}/show`, Transaction.show);
    this.route.delete(`${baseRoute}/delete/:id`, Transaction.delete);
    this.route.put(`${baseRoute}/update/:id`, Transaction.update);
  }

  stock(baseRoute): void {
    this.route.post(`${baseRoute}/store`, Stock.store);
    this.route.get(`${baseRoute}/index/:id`, Stock.index);
    this.route.get(`${baseRoute}/show`, Stock.show);
    this.route.delete(`${baseRoute}/delete/:id`, Stock.delete);
    this.route.put(`${baseRoute}/update/:id`, Stock.update);
  }

  feedstock(baseRoute): void {
    this.route.post(`${baseRoute}/store`, Feedstock.store);
    this.route.get(`${baseRoute}/index/:id`, Feedstock.index);
    this.route.get(`${baseRoute}/show`, Feedstock.show);
    this.route.delete(`${baseRoute}/delete/:id`, Feedstock.delete);
    this.route.put(`${baseRoute}/update/:id`, Feedstock.update);
  }

  machine(baseRoute): void {
    this.route.post(`${baseRoute}/store`, Machine.store);
    this.route.get(`${baseRoute}/index/:id`, Machine.index);
    this.route.get(`${baseRoute}/show`, Machine.show);
    this.route.delete(`${baseRoute}/delete/:id`, Machine.delete);
    this.route.put(`${baseRoute}/update/:id`, Machine.update);
  }

  product(baseRoute): void {
    this.route.post(`${baseRoute}/store`, Product.store);
    this.route.get(`${baseRoute}/index/:id`, Product.index);
    this.route.get(`${baseRoute}/show`, Product.show);
    this.route.delete(`${baseRoute}/delete/:id`, Product.delete);
    this.route.put(`${baseRoute}/update/:id`, Product.update);
  }

  category(baseRoute): void {
    this.route.post(`${baseRoute}/store`, Category.store);
    this.route.get(`${baseRoute}/index/:id`, Category.index);
    this.route.get(`${baseRoute}/show`, Category.show);
    this.route.delete(`${baseRoute}/delete/:id`, Category.delete);
    this.route.put(`${baseRoute}/update/:id`, Category.update);
  }

  file(baseRoute): void {
    this.route.post(
      `${baseRoute}/store/:typeFile/:path`,
      this.uploadMiddleware([
        { name: 'mockup_frente', maxCount: 1 },
        { name: 'mockup_verso', maxCount: 1 },
      ]),
      File.store,
    );
    this.route.get(`${baseRoute}/index/:name`, File.index);
    this.route.get(`${baseRoute}/show`, File.show);
    this.route.delete(`${baseRoute}/delete/:id`, File.delete);
    this.route.put(`${baseRoute}/update/:id`, File.update);
  }

  supplies(baseRoute): void {
    this.route.post(`${baseRoute}/store`, Supplies.store);
    this.route.get(`${baseRoute}/index/:id`, Supplies.index);
    this.route.get(`${baseRoute}/show`, Supplies.show);
    this.route.delete(`${baseRoute}/delete/:id`, Supplies.delete);
    this.route.put(`${baseRoute}/update/:id`, Supplies.update);
  }

  ad(baseRoute): void {
    this.route.post(`${baseRoute}/store`, Ad.store);
    this.route.get(`${baseRoute}/index/:id`, Ad.index);
    this.route.get(`${baseRoute}/show`, Ad.show);
    this.route.delete(`${baseRoute}/delete/:id`, Ad.delete);
    this.route.put(`${baseRoute}/update/:id`, Ad.update);
  }

  shop(baseRoute): void {
    this.route.post(`${baseRoute}/store`, Shop.store);
    this.route.get(`${baseRoute}/index/:id`, Shop.index);
    this.route.get(`${baseRoute}/show`, Shop.show);
    this.route.delete(`${baseRoute}/delete/:id`, Shop.delete);
    this.route.put(`${baseRoute}/update/:id`, Shop.update);
  }

  promotion(baseRoute): void {
    this.route.post(`${baseRoute}/store`, Promotion.store);
    this.route.get(`${baseRoute}/index/:id`, Promotion.index);
    this.route.get(`${baseRoute}/show`, Promotion.show);
    this.route.delete(`${baseRoute}/delete/:id`, Promotion.delete);
    this.route.put(`${baseRoute}/update/:id`, Promotion.update);
  }

  order(baseRoute): void {
    this.route.post(`${baseRoute}/store`, Order.store);
    this.route.get(`${baseRoute}/index/:id`, Order.index);
    this.route.get(`${baseRoute}/show`, Order.show);
    this.route.delete(`${baseRoute}/delete/:id`, Order.delete);
    this.route.put(`${baseRoute}/update/:id`, Order.update);
  }

  customer(baseRoute): void {
    this.route.post(`${baseRoute}/store`, Customer.store);
    this.route.get(`${baseRoute}/index/:id`, Customer.index);
    this.route.get(`${baseRoute}/show`, Customer.show);
    this.route.delete(`${baseRoute}/delete/:id`, Customer.delete);
    this.route.put(`${baseRoute}/update/:id`, Customer.update);
  }

  employee(baseRoute): void {
    this.route.post(`${baseRoute}/store`, Employee.store);
    this.route.get(`${baseRoute}/index/:id`, Employee.index);
    this.route.get(`${baseRoute}/show`, Employee.show);
    this.route.delete(`${baseRoute}/delete/:id`, Employee.delete);
    this.route.put(`${baseRoute}/update/:id`, Employee.update);
  }

  company(baseRoute): void {
    this.route.post(`${baseRoute}/store`, Company.store);
    this.route.get(`${baseRoute}/index/:id`, Company.index);
    this.route.get(`${baseRoute}/show`, Company.show);
    this.route.delete(`${baseRoute}/delete/:id`, Company.delete);
    this.route.put(`${baseRoute}/update/:id`, Company.update);
  }

  ean(baseRoute): void {
    this.route.post(`${baseRoute}/store`, Ean.store);
    this.route.get(`${baseRoute}/index/:id`, Ean.index);
    this.route.get(`${baseRoute}/show`, Ean.show);
    this.route.delete(`${baseRoute}/delete/:id`, Ean.delete);
    this.route.put(`${baseRoute}/update/:id`, Ean.update);
  }
}
export default new Routes().route;
