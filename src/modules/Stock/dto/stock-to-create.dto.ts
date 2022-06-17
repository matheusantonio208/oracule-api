import { Schema } from 'mongoose';
export class StockToCreateDto {
  input_amount: number;
  exits: [
    {
      exit_date: Date;
      exit_amount: number;
    },
  ];
  transaction_id: {
    type: Schema.Types.ObjectId;
    ref: 'transactions';
  };

  constructor(body: StockToCreateDto) {
    this.input_amount = body?.input_amount;
    this.exits = body?.exits;
    this.transaction_id = body?.transaction_id;
  }
}
