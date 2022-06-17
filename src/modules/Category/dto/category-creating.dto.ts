import { Schema } from 'mongoose';

export class CategoryCreatingDto {
  name: string;

  parent_category: Schema.Types.ObjectId;

  constructor(body: CategoryCreatingDto) {
    this.name = body?.name;
    this.parent_category = body?.parent_category;
  }
}
