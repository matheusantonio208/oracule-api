import { IRequest, IResponse } from '../../@types';
import {
  OrderToCreateDto,
  OrderCreatingDto,
  OrderCreatedDto,
  OrderToUpdateDto,
} from './dto/index.dto';
import orderRepository from './order.repository';

// import orderService from './order.service';

class OrderController {
  async store(req: IRequest, res: IResponse) {
    try {
      // === Get Vars === //
      const order: OrderToCreateDto = new OrderToCreateDto(req.body);

      // === Generate Vars === //
      // const orderProperty: number = await orderService.serviceFunction();

      // === Create Dto === //
      const orderCreatingDto: OrderCreatingDto = new OrderCreatingDto({
        ...order,
        // code: orderCode
      });

      // === Create Object === //
      const orderCreated: OrderCreatedDto = await orderRepository.create(
        orderCreatingDto,
      );

      return res.status(201).json(orderCreated);
    } catch (error) {
      return res.status(401).json({ error_msg: `Error! ${error}` });
    }
  }

  async index(req: IRequest, res: IResponse) {
    try {
      const { id } = req.params;

      const order: OrderCreatedDto = await orderRepository.getOneById(id);

      return res.status(201).json(order);
    } catch (error) {
      return res.status(401).json({ error_msg: `Error! ${error}` });
    }
  }

  async show(req: IRequest, res: IResponse) {
    try {
      const { property, sort, itensPerPage, pagination } = req.query;

      const order: Array<OrderCreatedDto> = await orderRepository.listAll(
        property,
        sort,
        itensPerPage,
        pagination,
      );

      return res.status(201).json(order);
    } catch (error) {
      return res.status(401).json({ error_msg: `Error! ${error}` });
    }
  }

  async delete(req: IRequest, res: IResponse) {
    try {
      const { id } = req.params;

      await orderRepository.deleteById(id);

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
      const data: OrderToUpdateDto = new OrderToUpdateDto(req.body);

      const orderUpdated: OrderCreatedDto = await orderRepository.updateById(
        id,
        data,
      );

      return res.status(201).json(orderUpdated);
    } catch (error) {
      return res.status(401).json({ error_msg: `Error! ${error}` });
    }
  }
}

export default new OrderController();
