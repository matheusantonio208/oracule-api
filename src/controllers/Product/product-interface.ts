import { Schema } from 'mongoose';

export interface IProduct {
  icon_id: {
    type: Schema.Types.ObjectId;
    ref: 'icons_products';
  };
  images_id: [
    {
      type: Schema.Types.ObjectId;
      ref: 'images_product';
    },
  ];
  video_id: {
    type: Schema.Types.ObjectId;
    ref: 'videos_product';
  };
  name: string;
  sku: string;
  brand_id: {
    type: Schema.Types.ObjectId;
    ref: 'brands';
  };
  categories_id: {
    type: Schema.Types.ObjectId;
    ref: 'categories_product';
  };
  tags: [
    {
      type: string;
    },
  ];
  production_type: {
    type: string;
    enum: ['own', 'outsourced'];
  };
  provider_id: {
    type: Schema.Types.ObjectId;
    ref: 'providers';
  };
  production_time_in_minutes: number;
  feedstock_id: [
    {
      type: Schema.Types.ObjectId;
      ref: 'feedstock';
    },
  ];
  supplies_id: [
    {
      type: Schema.Types.ObjectId;
      ref: 'supplies';
    },
  ];
  employee_id: [
    {
      type: Schema.Types.ObjectId;
      ref: 'employees';
    },
  ];
  files_production: [
    {
      name: string;
      path: string;
    },
  ];
  machines_id: [
    {
      type: Schema.Types.ObjectId;
      ref: 'machines';
    },
  ];
  products_id: [
    {
      type: Schema.Types.ObjectId;
      ref: 'products';
    },
  ];
  production_cost: number;
  datasheet: {
    weight_in_grams: number;
    width_in_cm: number;
    height_in_cm: number;
    depth_in_cm: number;
    material: string;
  };
}
