import { Schema } from 'mongoose';
import Order from '../../schemas/Order';

import {
  OrderCreatingDto,
  OrderCreatedDto,
  OrderToUpdateDto,
} from './dto/index.dto';

class OrderRepository {
  async create(order: OrderCreatingDto): Promise<OrderCreatedDto> {
    const orderCreate = new Order(order);

    if (await orderCreate.save()) {
      return orderCreate;
    }

    throw new Error(`Error to create order`);
  }

  async getOneById(id: Schema.Types.ObjectId): Promise<OrderCreatedDto> {
    const order: OrderCreatedDto = await Order.findById(id);
    if (order) return order;

    throw new Error(`Error to get order`);
  }

  async listAll(
    property: string,
    sort: string,
    itensPerPage: number,
    pagination: number,
  ): Promise<Array<OrderCreatedDto>> {
    const orders: Array<OrderCreatedDto> = await Order.find({}, (err, docs) => {
      if (!err) return docs;
    })
      .sort([[property, sort]])
      .skip(pagination)
      .limit(itensPerPage)
      .exec();

    if (orders) return orders;

    throw new Error(`Error to list categories`);
  }

  async updateById(
    id: Schema.Types.ObjectId,
    data: OrderToUpdateDto,
  ): Promise<OrderCreatedDto> {
    const updatedOrder: OrderCreatedDto = await Order.findByIdAndUpdate(
      id,
      data,
      (error, document) => {
        if (!error) return document;
      },
    );

    if (updatedOrder) return updatedOrder;

    throw new Error(`Error to update order`);
  }

  async deleteById(id: Schema.Types.ObjectId): Promise<Boolean> {
    if (await Order.deleteOne({ _id: id })) return true;

    throw new Error(`Error to delete order`);
  }
}

export default new OrderRepository();
