import { Schema } from 'mongoose';

export interface IFeedstock {
  image_id: {
    type: Schema.Types.ObjectId;
    ref: 'persons';
  };
  name: string;
  sku: string;
  weight: string;
  stock_movement_id: {
    type: Schema.Types.ObjectId;
    ref: 'stock';
  };
}
