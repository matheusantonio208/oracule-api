import { model, Schema } from 'mongoose';

import { IMachine } from '#controllers/Machine/machine-interface';

const factorySchema = new Schema<IMachine>(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      enum: ['machine', 'tool'],
      required: true,
    },
    transaction_id: {
      type: Schema.Types.ObjectId,
      required: true,
    },
    life_expectancy_in_months: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true },
);

export default model<IMachine>('factories', factorySchema);
