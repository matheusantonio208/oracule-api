import { model, Schema } from 'mongoose';

import { IProvider } from '../controllers/Provider/provider-interface';

const providerSchema = new Schema<IProvider>(
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

export default model<IProvider>('feedstock', providerSchema);
