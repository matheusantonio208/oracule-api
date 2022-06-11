import { model, Schema } from 'mongoose';

import { ICustomer } from '../controllers/Customer/customer.interface';

const customerSchema = new Schema<ICustomer>(
  {
    property: String,
  },
  { timestamps: true },
);

export default model<ICustomer>('customers', customerSchema);
