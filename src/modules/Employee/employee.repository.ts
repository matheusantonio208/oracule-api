import { Schema } from 'mongoose';

import Employee from '../../schemas/Employee';
import {
  EmployeeCreatingDto,
  EmployeeCreatedDto,
  EmployeeToUpdateDto,
} from './dto/index.dto';

class EmployeeRepository {
  async create(employee: EmployeeCreatingDto): Promise<EmployeeCreatedDto> {
    const employeeCreate = new Employee(employee);

    if (await employeeCreate.save()) {
      return employeeCreate;
    }

    throw new Error(`Error to create employee`);
  }

  async getOneById(id: Schema.Types.ObjectId): Promise<EmployeeCreatedDto> {
    const employee: EmployeeCreatedDto = await Employee.findById(id);
    if (employee) return employee;

    throw new Error(`Error to get employee`);
  }

  async listAll(
    property: string,
    sort: string,
    itensPerPage: number,
    pagination: number,
  ): Promise<Array<EmployeeCreatedDto>> {
    const employees: Array<EmployeeCreatedDto> = await Employee.find(
      {},
      (error, docs) => {
        if (!error) return docs;
      },
    )
      .sort([[property, sort]])
      .skip(pagination)
      .limit(itensPerPage)
      .exec();

    if (employees) return employees;

    throw new Error(`Error to list categories`);
  }

  async updateById(
    id: Schema.Types.ObjectId,
    data: EmployeeToUpdateDto,
  ): Promise<EmployeeCreatedDto> {
    const updatedEmployee: EmployeeCreatedDto =
      await Employee.findByIdAndUpdate(id, data, (error, document) => {
        if (!error) return document;
      });

    if (updatedEmployee) return updatedEmployee;

    throw new Error(`Error to update employee`);
  }

  async deleteById(id: Schema.Types.ObjectId): Promise<Boolean> {
    if (await Employee.deleteOne({ _id: id })) return true;

    throw new Error(`Error to delete employee`);
  }
}

export default new EmployeeRepository();
