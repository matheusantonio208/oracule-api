import { IRequest, IResponse } from '../../@types';
import customerRepository from './customer.repository';
import {
  CustomerToCreateDto,
  CustomerCreatingDto,
  CustomerCreatedDto,
  CustomerToUpdateDto,
} from './dto/index.dto';

// import customerService from './customer.service';

class CustomerController {
  async store(req: IRequest, res: IResponse) {
    try {
      // === Get Vars === //
      const customer: CustomerToCreateDto = new CustomerToCreateDto(req.body);

      // === Generate Vars === //
      // const customerProperty: number = await customerService.serviceFunction();

      // === Create Dto === //
      const customerCreatingDto: CustomerCreatingDto = new CustomerCreatingDto({
        ...customer,
      });

      // === Create Object === //
      const customerCreated: CustomerCreatedDto =
        await customerRepository.create(customerCreatingDto);

      return res.status(201).json(customerCreated);
    } catch (error) {
      return res.status(401).json({ error_msg: `Error! ${error}` });
    }
  }

  async index(req: IRequest, res: IResponse) {
    try {
      const { id } = req.params;

      const customer: CustomerCreatedDto = await customerRepository.getOneById(
        id,
      );

      return res.status(201).json(customer);
    } catch (error) {
      return res.status(401).json({ error_msg: `Error! ${error}` });
    }
  }

  async show(req: IRequest, res: IResponse) {
    try {
      const { property, sort, itensPerPage, pagination } = req.query;

      const customer: Array<CustomerCreatedDto> =
        await customerRepository.listAll(
          property,
          sort,
          itensPerPage,
          pagination,
        );

      return res.status(201).json(customer);
    } catch (error) {
      return res.status(401).json({ error_msg: `Error! ${error}` });
    }
  }

  async delete(req: IRequest, res: IResponse) {
    try {
      const { id } = req.params;

      await customerRepository.deleteById(id);

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
      const data: CustomerToUpdateDto = new CustomerToUpdateDto(req.body);

      const customerUpdated: CustomerCreatedDto =
        await customerRepository.updateById(id, data);

      return res.status(201).json(customerUpdated);
    } catch (error) {
      return res.status(401).json({ error_msg: `Error! ${error}` });
    }
  }
}

export default new CustomerController();
