import { model, Schema } from 'mongoose';

import { IShop } from '../controllers/Shop/shop.interface';

const shopSchema = new Schema<IShop>(
  {
    name: String,
  },
  { timestamps: true },
);

export default model<IShop>('shops', shopSchema);
