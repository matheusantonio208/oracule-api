import { model, Schema } from 'mongoose';

import { IEmployee } from '../controllers/Employee/employee.interface';

const employeeSchema = new Schema<IEmployee>(
  {
    name: String,
  },
  { timestamps: true },
);

export default model<IEmployee>('employees', employeeSchema);
