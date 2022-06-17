import { Schema } from 'mongoose';
export class TransactionToCreateDto {
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

  constructor(body: TransactionToCreateDto) {
    this.seller = body?.seller;
    this.item_id = body?.item_id;
    this.date = body?.date;
    this.value = body?.value;
  }
}
