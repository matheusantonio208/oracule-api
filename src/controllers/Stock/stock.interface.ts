import { Schema } from 'mongoose';

export interface IStock {
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
}
