import { Schema } from 'mongoose';
export class FactoryToCreateDto {
  name: string;

  products_id: [
    {
      type: Schema.Types.ObjectId;
      ref: 'products';
    },
  ];

  constructor(body: FactoryToCreateDto) {
    this.name = body?.name;
    this.products_id = body?.products_id;
  }
}
