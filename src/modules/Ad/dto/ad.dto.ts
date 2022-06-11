import { Schema } from 'mongoose';

export class AdDto {
  title: string;
  description: string;
  additional_img_id: [
    {
      type: Schema.Types.ObjectId;
      ref: 'files';
    },
  ];
  additional_vid_id: [
    {
      type: Schema.Types.ObjectId;
      ref: 'files';
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
  shops_id: [
    {
      type: Schema.Types.ObjectId;
      ref: 'shops';
    },
  ];
  price: number;
  price_history: [
    {
      date_set_price: Date;
      set_price: number;
    },
  ];
  // purchase_history: [
  //   {
  //     type: Schema.Types.ObjectId;
  //     ref: 'purchases';
  //   },
  // ];
  // feedbacks_history: [
  //   {
  //     customer_id: {
  //       type: Schema.Types.ObjectId;
  //       ref: 'customers';
  //     };
  //     feedback: string;
  //     assessment: number;
  //   },
  // ];
}
