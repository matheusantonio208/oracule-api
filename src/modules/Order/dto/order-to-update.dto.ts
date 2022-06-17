import { Schema } from 'mongoose';

export class OrderToUpdateDto {
  track_code: string;

  status: string;

  ad_id: Schema.Types.ObjectId;

  products_id: Array<Schema.Types.ObjectId>;

  constructor(body: OrderToUpdateDto) {
    this.track_code = body?.track_code;
    this.status = body?.status;
    this.ad_id = body?.ad_id;
    this.products_id = body?.products_id;
  }
}
