import { model, Schema } from 'mongoose';

import { CategoryCreatedDto } from '../modules/Category/dto/category-created.dto';

const categorySchema = new Schema<CategoryCreatedDto>(
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

export default model<CategoryCreatedDto>('categories', categorySchema);
