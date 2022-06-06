import { model, Schema } from 'mongoose';

import { ISupplies } from '../controllers/Supplies/supplies.interface';

const suppliesSchema = new Schema<ISupplies>(
  {
    image_id: [
      {
        type: Schema.Types.ObjectId,
        ref: 'images',
      },
    ],
    name: String,
    description: String,
    categories: String,
    provider_id: [
      {
        type: Schema.Types.ObjectId,
        ref: 'providers',
      },
    ],
    stock_movement_id: {
      type: Schema.Types.ObjectId,
      ref: 'stocks',
    },
  },
  { timestamps: true },
);

export default model<ISupplies>('supplies', suppliesSchema);
