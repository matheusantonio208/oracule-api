import { model, Schema } from 'mongoose';

import { ICategory } from '../controllers/Category/category.interface';

const categorySchema = new Schema<ICategory>(
  {
    name: {
      type: String,
      required: true,
    },
    parent_category: {
      type: Schema.Types.ObjectId,
      ref: 'categories',
    },
  },
  { timestamps: true },
);

export default model<ICategory>('categories', categorySchema);
