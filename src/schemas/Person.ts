import { model, Schema } from 'mongoose';

import { IPerson } from '../controllers/Person/person-interface';

const personSchema = new Schema<IPerson>(
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

export default model<IPerson>('persons', personSchema);
