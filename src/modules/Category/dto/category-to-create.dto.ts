import { Schema } from 'mongoose';

export class CategoryToCreateDto {
  name: string;

  parent_category_id?: Schema.Types.ObjectId;

  constructor(body: CategoryToCreateDto) {
    this.name = body?.name;
    this.parent_category_id = body?.parent_category_id;
  }
}
