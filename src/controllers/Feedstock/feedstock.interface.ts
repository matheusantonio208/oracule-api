import { Schema } from 'mongoose';

export interface IFeedstock {
  icon_id: {
    type: Schema.Types.ObjectId;
    ref: 'persons';
  };

  name: string;

  sku: string;

  material: string;

  ncm: string;

  weight: string;

  stock_movement_id: {
    type: Schema.Types.ObjectId;
    ref: 'stock';
  };
}
