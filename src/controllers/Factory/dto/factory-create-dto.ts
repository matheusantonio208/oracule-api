import { Schema } from 'mongoose';

import { IFactory } from '../factory-interface';

export class FactoryCreateDto implements IFactory {
  name: string;

  products_id: [
    {
      type: Schema.Types.ObjectId;
      ref: 'products';
    },
  ];

  constructor(body: IFactory) {
    this.name = body?.name;
    this.products_id = body?.products_id;
  }
}
