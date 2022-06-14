import { model, Schema } from 'mongoose';
import { AdCreatedDto } from '../modules/Ad/dto/index.dto';

const adSchema = new Schema<AdCreatedDto>(
  {
    title: String,
    description: String,
    additional_img_id: [
      {
        type: Schema.Types.ObjectId,
        ref: 'files',
      },
    ],
    additional_vid_id: [
      {
        type: Schema.Types.ObjectId,
        ref: 'files',
      },
    ],
    status: {
      type: String,
      enum: ['created', 'stopped', 'active', 'disabled'],
    },
    ean_code: String,
    sku: String,
    category_id: {
      type: Schema.Types.ObjectId,
      ref: 'categories_product',
    },
    promotions_id: [
      {
        type: Schema.Types.ObjectId,
        ref: 'promotions',
      },
    ],
    product_id: {
      type: Schema.Types.ObjectId,
      ref: 'products',
    },
    shop_id: {
      type: Schema.Types.ObjectId,
      ref: 'shops',
    },
    typeAd: String,
    profit: Number,
    price: Number,
    price_history: [
      {
        date: Date,
        price: Number,
      },
    ],
    purchase_history: [
      {
        type: Schema.Types.ObjectId,
        ref: 'purchases',
      },
    ],
    feedbacks_history: [
      {
        customer_id: {
          type: Schema.Types.ObjectId,
          ref: 'customers',
        },
        feedback: String,
        assessment: Number,
      },
    ],
  },
  { timestamps: true },
);

export default model<AdCreatedDto>('ads', adSchema);
