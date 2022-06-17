import { Schema } from 'mongoose';

export class StockToUpdateDto {
  input_amount: number;

  exists: [
    {
      exit_date: Date;
      exit_amount: number;
    },
  ];

  constructor(body: StockToUpdateDto) {
    this.input_amount = body?.input_amount;
    this.exists = body?.exists;
  }
}
