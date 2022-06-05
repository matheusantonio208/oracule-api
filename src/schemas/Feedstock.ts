import { model, Schema } from 'mongoose';
import { IFeedstock } from '../controllers/Feedstock/feedstock.interface';

const providerSchema = new Schema<IFeedstock>(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },

    synonyms: [
      {
        type: String,
        required: true,
        unique: true,
      },
    ],

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

export default model<IFeedstock>('feedstock', providerSchema);
