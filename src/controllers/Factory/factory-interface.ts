import { Schema } from 'mongoose';

export interface IFactory {
  name: string;
  products_id: [
    {
      type: Schema.Types.ObjectId;
      ref: 'products';
    },
  ];
}
