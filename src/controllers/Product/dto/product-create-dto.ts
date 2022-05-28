import { Schema } from 'mongoose';

import { IProduct } from '../product-interface';

export class ProductCreateDto implements IProduct {
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

  constructor(body: IProduct) {
    this.icon_id = body?.icon_id;
    this.images_id = body?.images_id;
    this.video_id = body?.video_id;
    this.name = body?.name;
    this.sku = body?.sku;
    this.brand_id = body?.brand_id;
    this.categories_id = body?.categories_id;
    this.tags = body?.tags;
    this.production_type = body?.production_type;
    this.provider_id = body?.provider_id;
    this.production_time_in_minutes = body?.production_time_in_minutes;
    this.feedstock_id = body?.feedstock_id;
    this.supplies_id = body?.supplies_id;
    this.employee_id = body?.employee_id;
    this.files_production = body?.files_production;
    this.machines_id = body?.machines_id;
  }
}
