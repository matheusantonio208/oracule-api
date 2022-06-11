import { Schema } from 'mongoose';

export interface IFeedstock {
  name: string;

  synonyms: Array<string>;

  variation: string;

  sku: string;

  material: string;

  ncm: string;

  weight_in_grams: number;

  stock_movement_id: {
    type: Schema.Types.ObjectId;
    ref: 'stock';
  };
}

/* === Feedstock Fields
  icon_id: {
    type: Schema.Types.ObjectId;
    ref: 'persons';
  };



  */
