import { Schema } from 'mongoose';

export class AdToCreateDto {
  title: string;
  description: string;
  additional_img_link: Array<string>;
  additional_vid_link: Array<string>;
  status: string;
  category_id: Schema.Types.ObjectId;
  promotions_id?: Array<Schema.Types.ObjectId>;
  product_id: Schema.Types.ObjectId;
  shop_id: Schema.Types.ObjectId;
  typeAd?: string;
  profit: number;
  country_ean_code: string;
  company_id: Schema.Types.ObjectId;

  constructor(body: AdToCreateDto) {
    this.description = body?.description;
    this.additional_img_link = body?.additional_img_link;
    this.additional_vid_link = body?.additional_vid_link;
    this.status = body?.status;
    this.category_id = body?.category_id;
    this.promotions_id = body?.promotions_id;
    this.product_id = body?.product_id;
    this.shop_id = body?.shop_id;
    this.profit = body?.profit;
  }
}
