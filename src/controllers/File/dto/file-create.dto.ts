import { Schema } from 'mongoose';

import { IFile } from '../file.interface';

export class FileCreateDto implements IFile {
  name: string;
  path: string;

  constructor(body: IFile) {
    this.name = body?.name;
    this.path = body?.path;
  }
}
