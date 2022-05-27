import { Schema } from 'mongoose';

export interface IProvider {
  name: string;
  products_id: [
    {
      type: Schema.Types.ObjectId;
      ref: 'products';
    },
  ];
}
