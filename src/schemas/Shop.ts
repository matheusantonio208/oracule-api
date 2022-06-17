import { model, Schema } from 'mongoose';

import { ShopCreatedDto } from '../modules/Shop/dto/index.dto';

const shopSchema = new Schema<ShopCreatedDto>(
  {
    name: String,
    sku_suffix: String,
  },
  { timestamps: true },
);

export default model<ShopCreatedDto>('shops', shopSchema);
