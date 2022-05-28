import { model, Schema } from 'mongoose';

import { IFactory } from '../controllers/Factory/factory-interface';

const factorySchema = new Schema<IFactory>(
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

export default model<IFactory>('factories', factorySchema);
