import { Document } from 'mongoose';
import { IRequest, IResponse } from '../../@types';

import { CustomerCreateDto } from './dto/customer-create.dto';
import { ICustomer } from './customer.interface';
import CustomerRepository from './customer.repository';

class CustomerController {
  async store(req: IRequest, res: IResponse) {
    try {
      const customerCreateDto: CustomerCreateDto = new CustomerCreateDto(
        req.body,
      );

      const customerCreated: Document<ICustomer> =
        await CustomerRepository.create(customerCreateDto);

      return res.status(201).json(customerCreated);
    } catch (error) {
      return res.status(401).json({ error_msg: `Error! ${error}` });
    }
  }

  async index(req: IRequest, res: IResponse) {
    try {
      const { id } = req.params;

      const customer: Document<ICustomer> = await CustomerRepository.getOneById(
        id,
      );

      return res.status(201).json(customer);
    } catch (error) {
      return res.status(401).json({ error_msg: `Error! ${error}` });
    }
  }

  async show(req: IRequest, res: IResponse) {
    try {
      const customer: Array<Document<ICustomer>> =
        await CustomerRepository.listAll();

      return res.status(201).json(customer);
    } catch (error) {
      return res.status(401).json({ error_msg: `Error! ${error}` });
    }
  }

  async delete(req: IRequest, res: IResponse) {
    try {
      const { id } = req.params;

      await CustomerRepository.deleteById(id);

      return res
        .status(201)
        .json({ success_msg: `Success! Your customer was deleted` });
    } catch (error) {
      return res.status(401).json({ error_msg: `Error! ${error}` });
    }
  }

  async update(req: IRequest, res: IResponse) {
    try {
      const { id } = req.params;
      const data = req.body;

      const customerUpdated = await CustomerRepository.updateById(id, data);

      return res.status(201).json(customerUpdated);
    } catch (error) {
      return res.status(401).json({ error_msg: `Error! ${error}` });
    }
  }
}

export default new CustomerController();
