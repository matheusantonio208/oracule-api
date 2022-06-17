import { Schema } from 'mongoose';

export class PromotionToUpdateDto {
  ticket: string;
  expiration_date: Date;
  limit: number;
  minimum_purchase_value: number;
  status: string;

  constructor(body: PromotionToUpdateDto) {
    this.ticket = body?.ticket;
    this.expiration_date = body?.expiration_date;
    this.limit = body?.limit;
    this.minimum_purchase_value = body?.minimum_purchase_value;
    this.status = body?.status;
  }
}
