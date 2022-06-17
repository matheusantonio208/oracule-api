import { Schema } from 'mongoose';

export class TransactionCreatedDto {
  seller: Schema.Types.ObjectId;
  description: string;
  item_id: Schema.Types.ObjectId;
  date: Date;
  value: number;

  constructor(body: TransactionCreatedDto) {
    this.seller = body?.seller;
    this.description = body?.description;
    this.item_id = body?.item_id;
    this.date = body?.date;
    this.value = body?.value;
  }
}
