import { Document } from 'mongoose';
import { IRequest, IResponse } from '../../@types';

import { OrderCreateDto } from './dto/order-create.dto';
import { IOrder } from './order.interface';
import OrderRepository from './order.repository';

class OrderController {
  async store(req: IRequest, res: IResponse) {
    try {
      const orderCreateDto: OrderCreateDto = new OrderCreateDto(req.body);

      const orderCreated: Document<IOrder> = await OrderRepository.create(
        orderCreateDto,
      );

      return res.status(201).json(orderCreated);
    } catch (error) {
      return res.status(401).json({ error_msg: `Error! ${error}` });
    }
  }

  async index(req: IRequest, res: IResponse) {
    try {
      const { id } = req.params;

      const order: Document<IOrder> = await OrderRepository.getOneById(id);

      return res.status(201).json(order);
    } catch (error) {
      return res.status(401).json({ error_msg: `Error! ${error}` });
    }
  }

  async show(req: IRequest, res: IResponse) {
    try {
      const order: Array<Document<IOrder>> = await OrderRepository.listAll();

      return res.status(201).json(order);
    } catch (error) {
      return res.status(401).json({ error_msg: `Error! ${error}` });
    }
  }

  async delete(req: IRequest, res: IResponse) {
    try {
      const { id } = req.params;

      await OrderRepository.deleteById(id);

      return res
        .status(201)
        .json({ success_msg: `Success! Your order was deleted` });
    } catch (error) {
      return res.status(401).json({ error_msg: `Error! ${error}` });
    }
  }

  async update(req: IRequest, res: IResponse) {
    try {
      const { id } = req.params;
      const data = req.body;

      const orderUpdated = await OrderRepository.updateById(id, data);

      return res.status(201).json(orderUpdated);
    } catch (error) {
      return res.status(401).json({ error_msg: `Error! ${error}` });
    }
  }
}

export default new OrderController();
