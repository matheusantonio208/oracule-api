import { Schema } from 'mongoose';

export class PromotionCreatingDto {
  ticket: string;
  expiration_date: Date;
  limit: number;
  used_in_orders_id: Schema.Types.ObjectId;
  discount_percentage: number;
  discount_value: number;
  minimum_purchase_value: number;
  status: string;

  constructor(body: PromotionCreatingDto) {
    this.ticket = body?.ticket;
    this.expiration_date = body?.expiration_date;
    this.limit = body?.limit;
    this.used_in_orders_id = body?.used_in_orders_id;
    this.discount_percentage = body?.discount_percentage;
    this.discount_value = body?.discount_value;
    this.minimum_purchase_value = body?.minimum_purchase_value;
    this.status = body?.status;
  }
}
