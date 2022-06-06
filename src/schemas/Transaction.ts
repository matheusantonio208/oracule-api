import { model, Schema } from 'mongoose';

import { ITransaction } from '../controllers/Transaction/transaction.interface';

const transactionSchema = new Schema<ITransaction>(
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

export default model<ITransaction>('transactions', transactionSchema);
