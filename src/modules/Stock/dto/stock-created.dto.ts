import { Schema } from 'mongoose';

export class StockCreatedDto {
  input_amount: number;
  exists: [
    {
      exit_date: Date;
      exit_amount: number;
    },
  ];
  transaction_id: Schema.Types.ObjectId;

  constructor(body: StockCreatedDto) {
    this.input_amount = body?.input_amount;
  }
}
