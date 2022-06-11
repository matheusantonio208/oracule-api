import { Schema } from 'mongoose';
import { IFeedstock } from '../feedstock.interface';

export class FeedstockCreateDto implements IFeedstock {
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

  constructor(body: IFeedstock) {
    this.name = body?.name;
    this.synonyms = body?.synonyms;
    this.variation = body?.variation;
    this.sku = body?.sku;
    this.material = body?.material;
    this.ncm = body?.ncm;
    this.weight_in_grams = body?.weight_in_grams;
  }
}
