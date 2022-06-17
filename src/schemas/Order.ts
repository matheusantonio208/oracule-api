import { model, Schema } from 'mongoose';

import { OrderCreatedDto } from '../modules/Order/dto/index.dto';

const orderSchema = new Schema<OrderCreatedDto>(
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

export default model<OrderCreatedDto>('orders', orderSchema);
