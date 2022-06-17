import { model, Schema } from 'mongoose';

import { TransactionCreatedDto } from '../modules/Transaction/dto/index.dto';

const transactionSchema = new Schema<TransactionCreatedDto>(
  {
    seller: {
      type: Schema.Types.ObjectId,
      ref: 'providers',
    },
    description: String,
    item_id: {
      type: Schema.Types.ObjectId,
    },
    date: {
      type: Date,
      require: true,
    },
    value: Number,
  },
  { timestamps: true },
);

export default model<TransactionCreatedDto>('transactions', transactionSchema);
