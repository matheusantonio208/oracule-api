import { Schema } from 'mongoose';

import { IStock } from '../stock.interface';

export class StockCreateDto implements IStock {
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

  constructor(body: IStock) {
    this.input_amount = body?.input_amount;
    this.exits = body?.exits;
    this.transaction_id = body?.transaction_id;
  }
}