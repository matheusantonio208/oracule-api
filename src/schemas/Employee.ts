import { model, Schema } from 'mongoose';

import { EmployeeCreatedDto } from '../modules/Employee/dto/index.dto';

const employeeSchema = new Schema<EmployeeCreatedDto>(
  {
    name: String,
  },
  { timestamps: true },
);

export default model<EmployeeCreatedDto>('employees', employeeSchema);
