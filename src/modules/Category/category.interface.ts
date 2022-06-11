import { Schema } from 'mongoose';

export interface ICategory {
  name: string;
  parent_category?: {
    type: Schema.Types.ObjectId;
    ref: 'categories';
  };
}
