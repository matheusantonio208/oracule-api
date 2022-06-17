import { Schema } from 'mongoose';

export class CategoryToUpdateDto {
  name: string;

  parent_category_id?: Schema.Types.ObjectId;

  constructor(body: CategoryToUpdateDto) {
    this.name = body?.name;
    this.parent_category_id = body?.parent_category_id;
  }
}
