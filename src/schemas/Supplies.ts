import { model, Schema } from 'mongoose';

import { SuppliesCreatedDto } from '../modules/Supplies/dto/index.dto';

const suppliesSchema = new Schema<SuppliesCreatedDto>(
  {
    images_id: [
      {
        type: Schema.Types.ObjectId,
        ref: 'images',
      },
    ],
    name: String,
    description: String,
    categories: String,
    providers_id: [
      {
        type: Schema.Types.ObjectId,
        ref: 'providers',
      },
    ],
    stock_movement_id: {
      type: Schema.Types.ObjectId,
      ref: 'stocks',
    },
  },
  { timestamps: true },
);

export default model<SuppliesCreatedDto>('supplies', suppliesSchema);
