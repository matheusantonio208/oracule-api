import { model, Schema } from 'mongoose';

import { IPromotion } from '../modules/Promotion/promotion.interface';

const promotionSchema = new Schema<IPromotion>(
  {
    ticket: String,
  },
  { timestamps: true },
);

export default model<IPromotion>('promotions', promotionSchema);
