import { model, Schema } from 'mongoose';

import { IProvider } from '../controllers/Provider/provider.interface';

const providerSchema = new Schema<IProvider>(
  {
    person_id: {
      type: Schema.Types.ObjectId,
      ref: 'persons',
    },
    name: {
      type: String,
      required: true,
    },
    itens_id: [
      {
        type: Schema.Types.ObjectId,
        ref: ['products', 'machines', 'feedstocks', 'supplies'],
      },
    ],
  },
  { timestamps: true },
);

export default model<IProvider>('providers', providerSchema);
