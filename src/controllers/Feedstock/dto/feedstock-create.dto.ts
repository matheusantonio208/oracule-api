import { Schema } from 'mongoose';

import { IFeedstock } from '../feedstock.interface';

export class FeedstockCreateDto implements IFeedstock {
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

  constructor(body: IFeedstock) {
    this.person_id = body?.person_id;
    this.categories = body?.categories;
    this.products_id = body?.products_id;
  }
}
