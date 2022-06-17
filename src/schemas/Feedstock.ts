import { model, Schema } from 'mongoose';
import { ProviderCreatedDto } from '../modules/Provider/dto/index.dto';

const providerSchema = new Schema<ProviderCreatedDto>(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },

    variation: {
      type: String,
      required: true,
      unique: true,
    },

    sku: {
      type: String,
      required: true,
      unique: true,
    },

    material: {
      type: String,
      required: true,
    },

    material_synonyms: [
      {
        type: String,
        required: true,
        unique: true,
      },
    ],

    ncm: {
      type: String,
      required: true,
    },

    weight_in_grams: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true },
);

export default model<ProviderCreatedDto>('feedstock', providerSchema);
