import { Schema } from 'mongoose';

export class ProviderToCreateDto {
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

  constructor(body: ProviderToCreateDto) {
    this.person_id = body?.person_id;
    this.itens_id = body?.itens_id;
  }
}
