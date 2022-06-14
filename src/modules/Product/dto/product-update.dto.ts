import { Schema } from 'mongoose';

export class ProductUpdateDto {
  name?: string;

  categories_id?: [
    {
      type: Schema.Types.ObjectId;
      ref: 'categories';
    },
  ];

  theme?: string;

  tags?: [
    {
      type: string;
    },
  ];

  production_type?: {
    type: string;
    enum: ['own', 'outsourced'];
  };

  provider_id?: {
    type: Schema.Types.ObjectId;
    ref: 'providers';
  };

  production_cost?: number;

  production_procedure?: [
    {
      order_step?: number;
      name_step?: string;
      description_step?: string;
      time_in_minutes?: number;
      feedstock_id?: [
        {
          type: Schema.Types.ObjectId;
          ref: 'feedstock';
        },
      ];

      machine_id?: {
        type: Schema.Types.ObjectId;
        ref: 'machines';
      };

      tools_id?: [
        {
          type: Schema.Types.ObjectId;
          ref: 'tools';
        },
      ];

      employee_id?: [
        {
          type: Schema.Types.ObjectId;
          ref: 'employees';
        },
      ];

      supplies: [
        {
          supplies_id?: {
            type: Schema.Types.ObjectId;
            ref: 'supplies';
          };
          amount?: number;
        },
      ];

      files_production?: [
        {
          type: Schema.Types.ObjectId;
          ref: 'files';
        },
      ];
    },
  ];

  datasheet?: {
    weight_in_grams?: number;
    width_in_cm?: number;
    height_in_cm?: number;
    depth_in_cm?: number;
    material?: string;
    expiration_time_in_days?: Number;
  };

  constructor(body: ProductUpdateDto) {
    this.name = body?.name;
    this.categories_id = body?.categories_id;
    this.theme = body?.theme;
    this.tags = body?.tags;
    this.production_type = body?.production_type;
    this.provider_id = body?.provider_id;
    this.production_cost = body?.production_cost;
    this.production_procedure = body?.production_procedure;
    this.datasheet = body?.datasheet;
  }
}
