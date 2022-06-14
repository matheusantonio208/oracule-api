import { model, Schema } from 'mongoose';

import { IEmployee } from '../modules/Employee/employee.interface';

const employeeSchema = new Schema<IEmployee>(
  {
    name: String,
  },
  { timestamps: true },
);

export default model<IEmployee>('employees', employeeSchema);
