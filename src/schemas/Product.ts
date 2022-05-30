import { model, Schema } from 'mongoose';

import { ISupplies } from '../controllers/Supplies/supplies.interface';

const suppliesSchema = new Schema<ISupplies>(
  {
    name: {
      type: String,
      required: true,
    },
    products_id: [
      {
        type: Schema.Types.ObjectId,
        ref: 'products',
      },
    ],
  },
  { timestamps: true },
);

export default model<ISupplies>('supplies', suppliesSchema);
