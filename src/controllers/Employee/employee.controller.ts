import { Document } from 'mongoose';
import { IRequest, IResponse } from '../../@types';

import { EmployeeCreateDto } from './dto/employee-create.dto';
import { IEmployee } from './employee.interface';
import EmployeeRepository from './employee.repository';

class EmployeeController {
  async store(req: IRequest, res: IResponse) {
    try {
      const employeeCreateDto: EmployeeCreateDto = new EmployeeCreateDto(
        req.body,
      );

      const employeeCreated: Document<IEmployee> =
        await EmployeeRepository.create(employeeCreateDto);

      return res.status(201).json(employeeCreated);
    } catch (error) {
      return res.status(401).json({ error_msg: `Error! ${error}` });
    }
  }

  async index(req: IRequest, res: IResponse) {
    try {
      const { id } = req.params;

      const employee: Document<IEmployee> = await EmployeeRepository.getOneById(
        id,
      );

      return res.status(201).json(employee);
    } catch (error) {
      return res.status(401).json({ error_msg: `Error! ${error}` });
    }
  }

  async show(req: IRequest, res: IResponse) {
    try {
      const employee: Array<Document<IEmployee>> =
        await EmployeeRepository.listAll();

      return res.status(201).json(employee);
    } catch (error) {
      return res.status(401).json({ error_msg: `Error! ${error}` });
    }
  }

  async delete(req: IRequest, res: IResponse) {
    try {
      const { id } = req.params;

      await EmployeeRepository.deleteById(id);

      return res
        .status(201)
        .json({ success_msg: `Success! Your employee was deleted` });
    } catch (error) {
      return res.status(401).json({ error_msg: `Error! ${error}` });
    }
  }

  async update(req: IRequest, res: IResponse) {
    try {
      const { id } = req.params;
      const data = req.body;

      const employeeUpdated = await EmployeeRepository.updateById(id, data);

      return res.status(201).json(employeeUpdated);
    } catch (error) {
      return res.status(401).json({ error_msg: `Error! ${error}` });
    }
  }
}

export default new EmployeeController();
