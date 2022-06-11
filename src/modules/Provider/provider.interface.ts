import { Schema } from 'mongoose';

export interface IProvider {
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
}
