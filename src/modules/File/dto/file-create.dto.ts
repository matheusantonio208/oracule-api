import { Schema } from 'mongoose';

import { IFile } from '../file.interface';

export class FileCreateDto implements IFile {
  name: string;
  link: string;

  constructor(body: IFile) {
    this.name = body?.name;
    this.link = body?.link;
  }
}
