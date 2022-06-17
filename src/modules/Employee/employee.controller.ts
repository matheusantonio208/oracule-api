import { IRequest, IResponse } from '../../@types';
import {
  EmployeeToCreateDto,
  EmployeeCreatingDto,
  EmployeeCreatedDto,
  EmployeeToUpdateDto,
} from './dto/index.dto';
import employeeRepository from './employee.repository';

// import employeeService from './employee.service';

class EmployeeController {
  async store(req: IRequest, res: IResponse) {
    try {
      // === Get Vars === //
      const employee: EmployeeToCreateDto = new EmployeeToCreateDto(req.body);

      // === Generate Vars === //
      // const employeeProperty: number = await employeeService.serviceFunction();

      // === Create Dto === //
      const employeeCreatingDto: EmployeeCreatingDto = new EmployeeCreatingDto({
        ...employee,
        // code: employeeCode
      });

      // === Create Object === //
      const employeeCreated: EmployeeCreatedDto =
        await employeeRepository.create(employeeCreatingDto);

      return res.status(201).json(employeeCreated);
    } catch (error) {
      return res.status(401).json({ error_msg: `Error! ${error}` });
    }
  }

  async index(req: IRequest, res: IResponse) {
    try {
      const { id } = req.params;

      const employee: EmployeeCreatedDto = await employeeRepository.getOneById(
        id,
      );

      return res.status(201).json(employee);
    } catch (error) {
      return res.status(401).json({ error_msg: `Error! ${error}` });
    }
  }

  async show(req: IRequest, res: IResponse) {
    try {
      const { property, sort, itensPerPage, pagination } = req.query;

      const employee: Array<EmployeeCreatedDto> =
        await employeeRepository.listAll(
          property,
          sort,
          itensPerPage,
          pagination,
        );

      return res.status(201).json(employee);
    } catch (error) {
      return res.status(401).json({ error_msg: `Error! ${error}` });
    }
  }

  async delete(req: IRequest, res: IResponse) {
    try {
      const { id } = req.params;

      await employeeRepository.deleteById(id);

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
      const data: EmployeeToUpdateDto = new EmployeeToUpdateDto(req.body);

      const employeeUpdated: EmployeeCreatedDto =
        await employeeRepository.updateById(id, data);

      return res.status(201).json(employeeUpdated);
    } catch (error) {
      return res.status(401).json({ error_msg: `Error! ${error}` });
    }
  }
}

export default new EmployeeController();
