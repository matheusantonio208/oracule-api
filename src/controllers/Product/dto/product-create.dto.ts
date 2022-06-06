import { Schema } from 'mongoose';
import { IProductCreate } from '../product.interface';

export class ProductCreateDto implements IProductCreate {
  name: string;

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

  constructor(body: IProductCreate) {
    this.name = body.name;
    this.feedstock_id = body.feedstock_id;
    this.tags = body.tags;
    this.production_cost = body.production_cost;
  }
}
