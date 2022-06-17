import { Schema } from 'mongoose';

export class OrderToUpdateDto {
  order_number: number;
  track_code: string;
  status: string;
  customer_id: Schema.Types.ObjectId;
  ad_id: Schema.Types.ObjectId;
  products_id: Array<Schema.Types.ObjectId>;

  constructor(body: OrderToUpdateDto) {
    this.order_number = body?.order_number;
    this.track_code = body?.track_code;
    this.status = body?.status;
    this.customer_id = body?.customer_id;
    this.ad_id = body?.ad_id;
    this.products_id = body?.products_id;
  }
}
