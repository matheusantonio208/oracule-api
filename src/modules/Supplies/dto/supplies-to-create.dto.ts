import { Schema } from 'mongoose';

export class SuppliesToCreateDto {
  images_id: Schema.Types.ObjectId;
  name: string;
  description: string;
  categories: string;
  providers_id: Array<Schema.Types.ObjectId>;
  stock_movement_id: Schema.Types.ObjectId;

  constructor(body: SuppliesToCreateDto) {
    this.name = body?.name;
    this.description = body?.description;
    this.categories = body?.categories;
    this.providers_id = body?.providers_id;
    this.stock_movement_id = body?.stock_movement_id;
  }
}
