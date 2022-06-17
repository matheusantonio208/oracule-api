import { Schema } from 'mongoose';

export class CategoryToUpdateDto {
  name: string;
  parent_category: Schema.Types.ObjectId;

  constructor(body: CategoryToUpdateDto) {
    this.name = body?.name;
    this.parent_category = body?.parent_category;
  }
}
