import { Schema } from 'mongoose';

export class TransactionToUpdateDto {
  seller: Schema.Types.ObjectId;
  description: string;
  item_id: Schema.Types.ObjectId;
  date: Date;
  value: number;

  constructor(body: TransactionToUpdateDto) {
    this.seller = body?.seller;
    this.description = body?.description;
    this.item_id = body?.item_id;
    this.date = body?.date;
    this.value = body?.value;
  }
}
