import { model, Schema } from 'mongoose';
import { ProductCreatedDto } from '../modules/Product/dto/index.dto';

const productSchema = new Schema<ProductCreatedDto>(
  {
    name: { type: String, unique: true },
    product_code: { type: String, unique: true },
    sku: String,
    theme: String,
    categories_id: [
      {
        type: Schema.Types.ObjectId,
        ref: 'categories',
      },
    ],
    tags: [{ type: String }],
    production_type: {
      type: String,
      enum: ['own', 'outsourced'],
    },
    provider_id: {
      type: Schema.Types.ObjectId,
      ref: 'providers',
    },
    production_cost: Number,
    production_procedure: [
      {
        order: Number,
        name: String,
        description: String,
        time_in_minutes: Number,
        feedstocks_id: [
          {
            type: Schema.Types.ObjectId,
            ref: 'feedstock',
          },
        ],
        machine_id: {
          type: Schema.Types.ObjectId,
          ref: 'machines',
        },
        tools_id: [
          {
            type: Schema.Types.ObjectId,
            ref: 'machines',
          },
        ],
        employee_id: [
          {
            type: Schema.Types.ObjectId,
            ref: 'employees',
          },
        ],
        supplies: [
          {
            supply_id: {
              type: Schema.Types.ObjectId,
              ref: 'supplies',
            },
            amount: Number,
          },
        ],
        files_production: [
          {
            type: Schema.Types.ObjectId,
            ref: 'files',
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
    video_id: {
      type: Schema.Types.ObjectId,
      ref: 'files',
    },
    images_id: [
      {
        type: Schema.Types.ObjectId,
        ref: 'files',
      },
    ],

    tax_information: {
      origin: Number,
      ncm: Number,
      cest: Number,
      item_type: String,
      percentage_taxes: Number,
      icms: {
        base_value: Number,
        value: Number,
        owner_value: Number,
      },
      ipi: Number,
      value_pis: Number,
      value_cofins: Number,
    },
    // brand_id: {
    //   type: Schema.Types.ObjectId,
    //   ref: 'brands',
    // },
    // purchase_history: [
    //   {
    //     type: Schema.Types.ObjectId;
    //     ref: 'purchases';
    //   },
    // ];
    // feedbacks_history: [
    //   {
    //     customer_id: {
    //       type: Schema.Types.ObjectId;
    //       ref: 'customers';
    //     };
    //     feedback: string;
    //     assessment: number;
    //   },
    // ];
  },
  { timestamps: true },
);

export default model<ProductCreatedDto>('products', productSchema);
