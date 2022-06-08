import { model, Schema } from 'mongoose';

import { IXxxx } from '../controllers/Xxxx/xxxx.interface';

const xxxxSchema = new Schema<IXxxx>(
  {
    property: String,
  },
  { timestamps: true },
);

export default model<IXxxx>('xxxxs', xxxxSchema);
