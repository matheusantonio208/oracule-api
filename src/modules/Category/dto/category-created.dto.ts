import { Schema } from 'mongoose';

export class CategoryCreatedDto {
  name: string;

  parent_category_id?: Schema.Types.ObjectId;

  constructor(body: CategoryCreatedDto) {
    this.name = body?.name;
    this.parent_category_id = body?.parent_category_id;
  }
}
