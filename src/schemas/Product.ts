import { model, Schema } from 'mongoose';

import { IProduct } from '../controllers/Product/product.interface';

const productSchema = new Schema<IProduct>(
  {
    images_id: [
      {
        type: Schema.Types.ObjectId,
        ref: 'images_product',
      },
    ],
    video_id: {
      type: Schema.Types.ObjectId,
      ref: 'videos_product',
    },
    name: String,
    product_code: Number,
    sku: String,
    brand_id: {
      type: Schema.Types.ObjectId,
      ref: 'brands',
    },
    categories_id: [
      {
        type: Schema.Types.ObjectId,
        ref: 'categories_product',
      },
    ],
    tags: [
      {
        type: String,
      },
    ],
    production_type: {
      type: String,
      enum: ['own', 'outsourced'],
    },
    provider_id: {
      type: Schema.Types.ObjectId,
      ref: 'providers',
    },
    production_procedure: [
      {
        order_step: Number,
        name_step: String,
        description_step: String,

        time_in_minutes: Number,

        machine_id: {
          type: Schema.Types.ObjectId,
          ref: 'machines',
        },

        tools_id: [
          {
            type: Schema.Types.ObjectId,
            ref: 'tools',
          },
        ],

        employee_id: [
          {
            type: Schema.Types.ObjectId,
            ref: 'employees',
          },
        ],
        feedstock_id: [
          {
            type: Schema.Types.ObjectId,
            ref: 'feedstock',
          },
        ],
        supplies: [
          {
            supplies_id: {
              type: Schema.Types.ObjectId,
              ref: 'supplies',
            },
            amount: Number,
          },
        ],
      },
    ],

    files_production: [
      {
        name: String,
        path: String,
      },
    ],
    production_cost: Number,
    datasheet: {
      weight_in_grams: Number,
      width_in_cm: Number,
      height_in_cm: Number,
      depth_in_cm: Number,
      material: String,
      expiration_time_in_days: Number,
    },
  },
  { timestamps: true },
);

export default model<IProduct>('products', productSchema);
