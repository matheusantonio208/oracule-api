import { model, Schema } from 'mongoose';

import { EanCreatedDto } from '../modules/Ean/dto/index.dto';

const eanSchema = new Schema<EanCreatedDto>(
  {
    ean: String,
  },
  { timestamps: true },
);

export default model<EanCreatedDto>('eans', eanSchema);
