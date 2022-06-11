import { Document } from 'mongoose';

import Order from '../../schemas/Order';

import { OrderCreateDto } from './dto/order-create.dto';
import { IOrder } from './order.interface';

class OrderRepository {
  async create(order: OrderCreateDto): Promise<Document<IOrder>> {
    const orderCreate = new Order(order);

    if (await orderCreate.save()) {
      return orderCreate;
    }

    throw new Error(`Error to create order`);
  }

  async getOneById(id: string): Promise<Document<IOrder>> {
    const order: Document<IOrder> = await Order.findById(id);
    if (order) return order;

    throw new Error(`Error to get order`);
  }

  async listAll(): Promise<Array<Document<IOrder>>> {
    const orders: Array<Document<IOrder>> = await Order.find(
      {},
      (err, docs) => {
        if (!err) return docs;
      },
    );

    if (orders) return orders;

    throw new Error(`Error to list categories`);
  }

  async updateById(id: string, data: any): Promise<Document<IOrder>> {
    const updatedOrder: Document<IOrder> = await Order.findByIdAndUpdate(
      id,
      data,
      (error, document) => {
        if (!error) return document;
      },
    );

    if (updatedOrder) return updatedOrder;

    throw new Error(`Error to update order`);
  }

  async deleteById(id: string): Promise<Boolean> {
    if (await Order.deleteOne({ _id: id })) return true;

    throw new Error(`Error to delete order`);
  }
}

export default new OrderRepository();
