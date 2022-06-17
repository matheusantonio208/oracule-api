import { model, Schema } from 'mongoose';

import { FactoryCreatedDto } from '../modules/Factory/dto/index.dto';

const factorySchema = new Schema<FactoryCreatedDto>(
  {
    name: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
);

export default model<FactoryCreatedDto>('factories', factorySchema);
