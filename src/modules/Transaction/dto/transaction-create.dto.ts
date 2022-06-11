import { Schema } from 'mongoose';

import { ITransaction } from '../transaction.interface';

export class TransactionCreateDto implements ITransaction {
  seller: {
    type: Schema.Types.ObjectId;
    ref: ['providers'];
  };
  item_id: {
    type: Schema.Types.ObjectId;
    ref: ['products', 'machines', 'feedstocks', 'supplies'];
  };
  description: string;
  date: {
    type: Date;
    require: true;
  };
  value: number;

  constructor(body: ITransaction) {
    this.seller = body?.seller;
    this.item_id = body?.item_id;
    this.date = body?.date;
    this.value = body?.value;
  }
}
