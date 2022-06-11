import { Schema } from 'mongoose';

export interface ITransaction {
  seller: {
    type: Schema.Types.ObjectId;
    ref: ['providers'];
  };
  description: string;
  item_id: {
    type: Schema.Types.ObjectId;
    ref: ['products', 'machines', 'feedstocks', 'supplies'];
  };
  date: {
    type: Date;
    require: true;
  };
  value: number;
}
