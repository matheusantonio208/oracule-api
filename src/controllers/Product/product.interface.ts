import { Schema } from 'mongoose';

export interface IProduct {
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
  product_code: number;
  sku: string;
  brand_id: {
    type: Schema.Types.ObjectId;
    ref: 'brands';
  };
  categories_id: [
    {
      type: Schema.Types.ObjectId;
      ref: 'categories_product';
    },
  ];
  tags: [
    {
      type: string;
    },
  ];
  production_type: {
    type: string;
    enum: ['own', 'outsourced'];
  };
  provider_id?: {
    type: Schema.Types.ObjectId;
    ref: 'providers';
  };
  production_procedure: [
    {
      order_step: number;
      name_step: string;
      description_step: string;

      time_in_minutes: number;

      machine_id: {
        type: Schema.Types.ObjectId;
        ref: 'machines';
      };

      tools_id: [
        {
          type: Schema.Types.ObjectId;
          ref: 'tools';
        },
      ];

      employee_id: [
        {
          type: Schema.Types.ObjectId;
          ref: 'employees';
        },
      ];
      feedstock_id: [
        {
          type: Schema.Types.ObjectId;
          ref: 'feedstock';
        },
      ];
      supplies: [
        {
          supplies_id: {
            type: Schema.Types.ObjectId;
            ref: 'supplies';
          };
          amount: number;
        },
      ];
    },
  ];

  files_production: [
    {
      name: string;
      path: string;
    },
  ];
  production_cost: number;
  datasheet: {
    weight_in_grams: number;
    width_in_cm: number;
    height_in_cm: number;
    depth_in_cm: number;
    material: string;
    expiration_time_in_days?: Number;
  };
}
