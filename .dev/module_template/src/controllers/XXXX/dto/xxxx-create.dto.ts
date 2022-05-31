import { Schema } from 'mongoose';

import { IXxxx } from '../xxxx.interface';

export class XxxxCreateDto implements IXxxx {
  property_id: {
    type: Schema.Types.ObjectId;
    ref: 'persons';
  };

  constructor(body: IXxxx) {
    this.property_id = body?.property_id;
  }
}
