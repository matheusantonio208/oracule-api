import { model, Schema } from 'mongoose';

import { IOrder } from '../controllers/Order/order.interface';

const orderSchema = new Schema<IOrder>(
  {
    track_code: String,
  },
  { timestamps: true },
);

export default model<IOrder>('orders', orderSchema);
