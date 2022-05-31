import { model, Schema } from 'mongoose';

import { IXxxx } from '../controllers/XXXX/xxxx.interface';

const xxxxSchema = new Schema<IXxxx>(
  {
    name: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
);

export default model<IXxxx>('categories', xxxxSchema);
