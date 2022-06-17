import { model, Schema } from 'mongoose';

import { PromotionCreatedDto } from '../modules/Promotion/dto/index.dto';

const promotionSchema = new Schema<PromotionCreatedDto>(
  {
    ticket: String,
  },
  { timestamps: true },
);

export default model<PromotionCreatedDto>('promotions', promotionSchema);
