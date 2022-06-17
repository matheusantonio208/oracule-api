import { model, Schema } from 'mongoose';

import { MachineCreatedDto } from '../modules/Machine/dto/index.dto';

const machineSchema = new Schema<MachineCreatedDto>(
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

export default model<MachineCreatedDto>('machines', machineSchema);
