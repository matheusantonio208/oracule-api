import { Schema } from 'mongoose';

export interface IAd {
  title: string;
  description: string;
  additional_img_id: [
    {
      type: Schema.Types.ObjectId;
      ref: 'images_products';
    },
  ];
  additional_vid_id: [
    {
      type: Schema.Types.ObjectId;
      ref: 'videos_products';
    },
  ];
  status: {
    type: string;
    enum: ['created', 'stopped', 'active', 'disabled'];
  };
  ean_code: string;
  category_id: {
    type: Schema.Types.ObjectId;
    ref: 'categories_product';
  };
  promotions_id: [
    {
      type: Schema.Types.ObjectId;
      ref: 'promotions';
    },
  ];
  product_id: {
    type: Schema.Types.ObjectId;
    ref: 'products';
  };
  store_id: {
    type: Schema.Types.ObjectId;
    ref: 'stores';
  };
  price: number;
  price_history: [
    {
      date_set_price: Date;
      set_price: number;
    },
  ];
  purchase_history: [
    {
      type: Schema.Types.ObjectId;
      ref: 'purchases';
    },
  ];
  feedbacks_history: [
    {
      customer_id: {
        type: Schema.Types.ObjectId;
        ref: 'customers';
      };
      feedback: string;
      assessment: number;
    },
  ];
}