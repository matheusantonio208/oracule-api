import { model, Schema } from 'mongoose';

import { IFile } from '../controllers/File/file.interface';

const fileSchema = new Schema<IFile>(
  {
    name: String,
    link: String,
  },
  { timestamps: true },
);

export default model<IFile>('files', fileSchema);
