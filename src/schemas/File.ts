import { model, Schema } from 'mongoose';

import { FileCreatedDto } from '../modules/File/dto/index.dto';
const fileSchema = new Schema<FileCreatedDto>(
  {
    name: String,
    link: String,
    category: String,
  },
  { timestamps: true },
);

export default model<FileCreatedDto>('files', fileSchema);
