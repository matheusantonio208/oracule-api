import { Schema } from 'mongoose';

import { IEmployee } from '../employee.interface';

export class EmployeeCreateDto implements IEmployee {
  name: string;

  constructor(body: IEmployee) {
    this.name = body?.name;
  }
}
