import { Schema } from 'mongoose';
import { ICategory } from '../category.interface';

export class CategoryCreateDto implements ICategory {
  name: string;
  parent_category?: {
    type: Schema.Types.ObjectId;
    ref: 'categories';
  };

  constructor(body: ICategory) {
    this.name = body?.name;
    this.parent_category = body?.parent_category;
  }
}
