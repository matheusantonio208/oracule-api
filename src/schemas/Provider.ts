import { model, Schema } from 'mongoose';

import { ProviderCreatedDto } from '../modules/Provider/dto/index.dto';

const providerSchema = new Schema<ProviderCreatedDto>(
  {
    person_id: {
      type: Schema.Types.ObjectId,
      ref: 'persons',
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

export default model<ProviderCreatedDto>('providers', providerSchema);
