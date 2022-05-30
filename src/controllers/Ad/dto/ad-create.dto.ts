import { Schema } from 'mongoose';

import { IAd } from '../ad.interface';

export class AdCreateDto implements IAd {
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

  constructor(body: IAd) {
    this.person_id = body?.person_id;
    this.categories = body?.categories;
    this.products_id = body?.products_id;
  }
}
