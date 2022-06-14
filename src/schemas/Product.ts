import { model, Schema } from 'mongoose';
import { ProductCreatedDto } from '../modules/Product/dto/product.dto';

const productSchema = new Schema<ProductCreatedDto>(
  {
    name: { type: String, unique: true },
    product_code: { type: Number, unique: true },

    sku: String,
    theme: String,
    tags: [{ type: String }],
    production_cost: Number,
    production_procedure: [
      {
        order_step: Number,
        name_step: String,
        description_step: String,
        time_in_minutes: Number,
        feedstock_id: [
          {
            type: Schema.Types.ObjectId,
            ref: 'feedstock',
          },
        ],
        machine_id: {
          type: Schema.Types.ObjectId,
          ref: 'machines',
        },
        // tools_id: [
        //   {
        //     type: Schema.Types.ObjectId,
        //     ref: 'tools',
        //   },
        // ],
        // employee_id: [
        //   {
        //     type: Schema.Types.ObjectId,
        //     ref: 'employees',
        //   },
        // ],
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
    datasheet: {
      weight_in_grams: Number,
      width_in_cm: Number,
      height_in_cm: Number,
      depth_in_cm: Number,
      material: String,
      expiration_time_in_days: Number,
    },
    images_id: [
      {
        type: Schema.Types.ObjectId,
        ref: 'files',
      },
    ],
    video_id: {
      type: Schema.Types.ObjectId,
      ref: 'files',
    },
    // brand_id: {
    //   type: Schema.Types.ObjectId,
    //   ref: 'brands',
    // },
    categories_id: [
      {
        type: Schema.Types.ObjectId,
        ref: 'categories',
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
    files_production: [
      {
        type: Schema.Types.ObjectId,
        ref: 'files',
      },
    ],
  },
  { timestamps: true },
);

export default model<ProductCreatedDto>('products', productSchema);
