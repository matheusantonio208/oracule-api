import { Schema } from 'mongoose';

export interface ISupplies {
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
}
