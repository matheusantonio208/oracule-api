import { Schema } from 'mongoose';

import { IProvider } from '../provider.interface';

export class ProviderCreateDto implements IProvider {
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

  constructor(body: IProvider) {
    this.person_id = body?.person_id;
    this.categories = body?.categories;
    this.products_id = body?.products_id;
  }
}
