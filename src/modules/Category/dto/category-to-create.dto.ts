import { Schema } from 'mongoose';
export class CategoryToCreateDto {
  name: string;
  parent_category?: {
    type: Schema.Types.ObjectId;
    ref: 'categories';
  };

  constructor(body: CategoryToCreateDto) {
    this.name = body?.name;
    this.parent_category = body?.parent_category;
  }
}
