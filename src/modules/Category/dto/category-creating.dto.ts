import { Schema } from 'mongoose';

export class CategoryCreatingDto {
  name: string;

  parent_category_id?: Schema.Types.ObjectId;

  constructor(body: CategoryCreatingDto) {
    this.name = body?.name;
    this.parent_category_id = body?.parent_category_id;
  }
}
