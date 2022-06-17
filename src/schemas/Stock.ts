import { model, Schema } from 'mongoose';

import { StockCreatedDto } from '../modules/Stock/dto/index.dto';

const stockSchema = new Schema<StockCreatedDto>(
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

export default model<StockCreatedDto>('stocks', stockSchema);
