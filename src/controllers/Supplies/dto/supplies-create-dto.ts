import { Schema } from 'mongoose';

import { ISupplies } from '../supplies-interface';

export class SuppliesCreateDto implements ISupplies {
  image_id: [
    {
      type: Schema.Types.ObjectId;
      ref: 'images';
    },
  ];
  name: string;
  description: string;
  categories: string;
  provider_id: [
    {
      type: Schema.Types.ObjectId;
      ref: 'providers';
    },
  ];
  stock_movement_id: {
    type: Schema.Types.ObjectId;
    ref: 'stock';
  };

  constructor(body: ISupplies) {
    this.image_id = body?.image_id;
    this.name = body?.name;
    this.description = body?.description;
    this.categories = body?.categories;
    this.provider_id = body?.provider_id;
    this.stock_movement_id = body?.stock_movement_id;
  }
}
