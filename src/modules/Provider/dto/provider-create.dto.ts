import { Schema } from 'mongoose';

import { IProvider } from '../provider.interface';

export class ProviderCreateDto implements IProvider {
  person_id: {
    type: Schema.Types.ObjectId;
    ref: 'persons';
  };
  itens_id: [
    {
      type: Schema.Types.ObjectId;
      ref: ['products', 'machines', 'feedstocks', 'supplies'];
    },
  ];

  constructor(body: IProvider) {
    this.person_id = body?.person_id;
    this.itens_id = body?.itens_id;
  }
}
