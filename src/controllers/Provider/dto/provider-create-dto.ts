import { Schema } from 'mongoose';

import { IProvider } from '../provider-interface';

export class ProviderCreateDto implements IProvider {
  name: string;

  products_id: [
    {
      type: Schema.Types.ObjectId;
      ref: 'products';
    },
  ];

  constructor(body: IProvider) {
    this.name = body?.name;
    this.products_id = body?.products_id;
  }
}
