import { Document } from 'mongoose';
import {
  EmployeeToCreateDto,
  EmployeeCreatingDto,
  EmployeeCreatedDto,
  EmployeeToUpdateDto,
} from './dto/index.dto';
import Employee from '../../schemas/Employee';

class EmployeeRepository {
  async create(employee: EmployeeCreateDto): Promise<Document<IEmployee>> {
    const employeeCreate = new Employee(employee);

    if (await employeeCreate.save()) {
      return employeeCreate;
    }

    throw new Error(`Error to create employee`);
  }

  async getOneById(id: Schema.Types.ObjectId;): Promise<Document<IEmployee>> {
    const employee: Document<IEmployee> = await Employee.findById(id);
    if (employee) return employee;

    throw new Error(`Error to get employee`);
  }

  async listAll(): Promise<Array<Document<IEmployee>>> {
    const employees: Array<Document<IEmployee>> = await Employee.find(
      {},
      (err, docs) => {
        if (!err) return docs;
      },
    );

    if (employees) return employees;

    throw new Error(`Error to list categories`);
  }

  async updateById(id: Schema.Types.ObjectId;, data: any): Promise<Document<IEmployee>> {
    const updatedEmployee: Document<IEmployee> =
      await Employee.findByIdAndUpdate(id, data, (error, document) => {
        if (!error) return document;
      });

    if (updatedEmployee) return updatedEmployee;

    throw new Error(`Error to update employee`);
  }

  async deleteById(id: Schema.Types.ObjectId;): Promise<Boolean> {
    if (await Employee.deleteOne({ _id: id })) return true;

    throw new Error(`Error to delete employee`);
  }
}

export default new EmployeeRepository();
