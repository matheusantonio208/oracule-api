import { Schema } from 'mongoose';

import { IStock } from '../stock-interface';

export class StockCreateDto implements IStock {
  input_amount: number;
  exits: [
    {
      exit_date: Date;
      exit_amount: number;
    },
  ];

  constructor(body: IStock) {
    this.input_amount = body?.input_amount;
    this.exits = body?.exits;
  }
}
