import { model, Schema } from 'mongoose';

import { IOrder } from '../modules/Order/order.interface';

const orderSchema = new Schema<IOrder>(
  {
    order_number: Number,
    track_code: String,
    status: {
      type: String,
      enum: ['pending', 'processing', 'shipped', 'delivered', 'cancelled'],
    },
    customer_id: {
      type: Schema.Types.ObjectId,
      ref: 'customers',
    },
    ad_id: {
      type: Schema.Types.ObjectId,
      ref: 'ads',
    },
    product_id: {
      type: Schema.Types.ObjectId,
      ref: 'products',
    },
  },
  { timestamps: true },
);

export default model<IOrder>('orders', orderSchema);
