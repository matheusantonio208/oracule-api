import { model, Schema } from 'mongoose';

import { IAd } from '../controllers/Ad/ad.interface';

const adSchema = new Schema<IAd>(
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
    category_id: {
      type: Schema.Types.ObjectId,
      ref: 'categories_product',
    },
    // promotions_id: [
    //   {
    //     type: Schema.Types.ObjectId,
    //     ref: 'promotions',
    //   },
    // ],
    product_id: {
      type: Schema.Types.ObjectId,
      ref: 'products',
    },
    // store_id: {
    //   type: Schema.Types.ObjectId,
    //   ref: 'stores',
    // },
    price: Number,
    price_history: [
      {
        date_set_price: Date,
        set_price: Number,
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

export default model<IAd>('ads', adSchema);
