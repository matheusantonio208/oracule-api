import { model, Schema } from 'mongoose';

import { IStock } from '../controllers/Stock/stock.interface';

const stockSchema = new Schema<IStock>(
  {
    input_amount: Number,
    exits: [
      {
        exit_date: Date,
        exit_amount: Number,
      },
    ],
    transaction_id: {
      type: Schema.Types.ObjectId,
      ref: 'transactions',
    },
  },
  { timestamps: true },
);

export default model<IStock>('stocks', stockSchema);
