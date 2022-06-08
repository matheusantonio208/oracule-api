import { Schema } from 'mongoose';

import { IXxxx } from '../xxxx.interface';

export class XxxxCreateDto implements IXxxx {
  property: string;

  constructor(body: IXxxx) {
    this.property = body?.property;
  }
}
