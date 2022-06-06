import { Schema } from 'mongoose';
import { IProductCreate } from '../product.interface';

export class ProductCreateDto implements IProductCreate {
  name: string;

  categories_id: [
    {
      type: Schema.Types.ObjectId;
      ref: 'categories';
    },
  ];
  theme: string;
  tags: [
    {
      type: string;
    },
  ];
  production_cost: number;

  production_procedure: [
    {
      order_step: number;
      name_step: string;
      description_step: string;

      time_in_minutes: number;

      feedstock_id: [
        {
          type: Schema.Types.ObjectId;
          ref: 'feedstock';
        },
      ];

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
  datasheet: {
    weight_in_grams: number;
    width_in_cm: number;
    height_in_cm: number;
    depth_in_cm: number;
    material: string;
    expiration_time_in_days?: Number;
  };
  constructor(body: IProductCreate) {
    this.name = body.name;
    this.theme = body.theme;
    this.tags = body.tags;
    this.production_cost = body.production_cost;
    this.production_procedure = body.production_procedure;
  }
}
