import { Schema } from 'mongoose';

export class CategoryCreatedDto {
  name: string;
  parent_category: Schema.Types.ObjectId;

  constructor(body: CategoryCreatedDto) {
    this.name = body?.name;
    this.parent_category = body?.parent_category;
  }
}
