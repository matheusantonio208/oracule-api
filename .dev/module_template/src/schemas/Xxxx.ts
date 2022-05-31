import { model, Schema } from 'mongoose';

import { IXxxx } from '../controllers/XXXX/xxxx.interface';

const xxxxSchema = new Schema<IXxxx>(
  {
    property_id: {
      type: Schema.Types.ObjectId,
      ref: 'schemaRef',
    },
  },
  { timestamps: true },
);

export default model<IXxxx>('xxxxs', xxxxSchema);
