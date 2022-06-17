import { Schema } from 'mongoose';
export class SuppliesToCreateDto {
  image_id: [
    {
      type: Schema.Types.ObjectId;
      ref: 'images';
    },
  ];
  name: string;
  description: string;
  categories: string;
  provider_id: [
    {
      type: Schema.Types.ObjectId;
      ref: 'providers';
    },
  ];
  stock_movement_id: {
    type: Schema.Types.ObjectId;
    ref: 'stocks';
  };

  constructor(body: SuppliesToCreateDto) {
    this.image_id = body?.image_id;
    this.name = body?.name;
    this.description = body?.description;
    this.categories = body?.categories;
    this.provider_id = body?.provider_id;
    this.stock_movement_id = body?.stock_movement_id;
  }
}
