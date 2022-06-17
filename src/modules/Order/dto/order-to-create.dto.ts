import { Schema } from 'mongoose';

export class OrderToCreateDto {
  status: string;

  customer_id: Schema.Types.ObjectId;

  ad_id: Schema.Types.ObjectId;

  products_id: Array<Schema.Types.ObjectId>;

  constructor(body: OrderToCreateDto) {
    this.status = body?.status;
    this.customer_id = body?.customer_id;
    this.ad_id = body?.ad_id;
    this.products_id = body?.products_id;
  }
}
