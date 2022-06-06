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

  feedstock_id: [
    {
      type: Schema.Types.ObjectId;
      ref: 'feedstock';
    },
  ];

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

  constructor(body: IProductCreate) {
    this.name = body.name;
    this.feedstock_id = body.feedstock_id;
    this.tags = body.tags;
    this.production_cost = body.production_cost;
    this.production_procedure = body.production_procedure;
  }
}
