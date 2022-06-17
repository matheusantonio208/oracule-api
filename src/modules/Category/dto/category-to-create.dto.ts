import { Schema } from 'mongoose';

export class CategoryToCreateDto {
  name: string;
  parent_category: Schema.Types.ObjectId;

  constructor(body: CategoryToCreateDto) {
    this.name = body?.name;
    this.parent_category = body?.parent_category;
  }
}
