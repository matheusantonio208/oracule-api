import { Schema } from 'mongoose';

export class AdToCreateDto {
  title: string;
  description: string;
  additional_img_id: Array<Schema.Types.ObjectId>;
  additional_vid_id: Array<Schema.Types.ObjectId>;
  status: string;
  category_id: Schema.Types.ObjectId;
  promotions_id?: Array<Schema.Types.ObjectId>;
  product_id: Schema.Types.ObjectId;
  shop_id: Schema.Types.ObjectId;
  typeAd?: string;
  profit: number;

  constructor(body: AdToCreateDto) {
    this.title = body?.title;
    this.description = body?.description;
    this.additional_img_id = body?.additional_img_id;
    this.additional_vid_id = body?.additional_vid_id;
    this.status = body?.status;
    this.category_id = body?.category_id;
    this.promotions_id = body?.promotions_id;
    this.product_id = body?.product_id;
    this.shop_id = body?.shop_id;
    this.profit = body?.profit;
  }
}
