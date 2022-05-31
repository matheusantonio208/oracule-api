import { Schema } from 'mongoose';

export interface IXxxx {
  property_id: {
    type: Schema.Types.ObjectId;
    ref: 'schemaRef';
  };
}
