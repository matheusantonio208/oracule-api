import { Schema } from 'mongoose';

export class StockToUpdateDto {
  input_amount: number;

  exists: [
    {
      exit_date: Date;
      exit_amount: number;
    },
  ];

  transaction_id: Schema.Types.ObjectId;

  constructor(body: StockToUpdateDto) {
    this.input_amount = body?.input_amount;
    this.exists = body?.exists;
    this.transaction_id = body?.transaction_id;
  }
}
