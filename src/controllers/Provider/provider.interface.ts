import { Schema } from 'mongoose';

export interface IProvider {
  person_id: {
    type: Schema.Types.ObjectId;
    ref: 'persons';
  };
  categories: {
    type: string;
    enum: ['feedstock', 'product', 'input', 'machine'];
  };
  products_id: [
    {
      type: Schema.Types.ObjectId;
      ref: 'products';
    },
  ];
}
