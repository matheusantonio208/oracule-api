import { model, Schema } from 'mongoose';

import { CustomerCreatedDto } from '../modules/Customer/dto/index.dto';

const customerSchema = new Schema<CustomerCreatedDto>(
  {
    property: String,
  },
  { timestamps: true },
);

export default model<CustomerCreatedDto>('customers', customerSchema);
