import { Schema } from 'mongoose';

export class AdCreatedDto {
  title: string;

  description: string;

  additional_img_id: Array<Schema.Types.ObjectId>;

  additional_vid_id: Array<Schema.Types.ObjectId>;

  status: string;

  ean_code: string;

  sku: string;

  category_id: Schema.Types.ObjectId;

  promotions_id?: Array<Schema.Types.ObjectId>;

  products_id: Array<Schema.Types.ObjectId>;

  shop_id: Schema.Types.ObjectId;

  typeAd?: string;

  profit: number;

  price: number;

  price_history: [
    {
      date: Date;
      price: number;
    },
  ];

  constructor(body: AdCreatedDto) {
    this.title = body?.title;
    this.description = body?.description;
    this.additional_img_id = body?.additional_img_id;
    this.additional_vid_id = body?.additional_vid_id;
    this.status = body?.status;
    this.ean_code = body?.ean_code;
    this.category_id = body?.category_id;
    this.promotions_id = body?.promotions_id;
    this.products_id = body?.products_id;
    this.shop_id = body?.shop_id;
    this.profit = body?.profit;
    this.price = body?.price;
    this.price_history = body?.price_history;
  }
}
