import { Schema } from 'mongoose';

export class ProductToCreateDto {
  name: string;
  product_code: string;
  sku: string;
  theme: string;
  categories_id: Array<Schema.Types.ObjectId>;
  tags: Array<string>;
  production_type: Array<string>;
  provider_id?: Schema.Types.ObjectId;
  production_cost: number;
  production_procedure: [
    {
      order: number;
      name: string;
      description: string;
      time_in_minutes: number;
      feedstock_id: Array<Schema.Types.ObjectId>;
      machine_id: Schema.Types.ObjectId;
      tools_id: Array<Schema.Types.ObjectId>;
      employee_id: Array<Schema.Types.ObjectId>;
      supplies: [
        {
          supply_id: Schema.Types.ObjectId;
          amount: number;
        },
      ];
      files_production: Array<Schema.Types.ObjectId>;
    },
  ];
  datasheet: {
    weight_in_grams: number;
    width_in_cm: number;
    height_in_cm: number;
    depth_in_cm: number;
    material: string;
    expiration_time_in_days?: Number;
  };
  videos_id?: Array<Schema.Types.ObjectId>;
  images_id: Array<Schema.Types.ObjectId>;
  tax_information: {
    origin: number;
    ncm: number;
    cest: number;
    item_type: string;
    percentage_taxes: number;
    icms: {
      base_value: number;
      value: number;
      owner_value: number;
    };
    ipi: number;
    value_pis: number;
    value_cofins: number;
  };

  purchase_history: Array<Schema.Types.ObjectId>;
  feedbacks_history: {
    customer_id: Schema.Types.ObjectId;
    feedback: string;
    rating: number;
  };

  constructor(body: ProductToCreateDto) {
    this.name = body?.name;
    this.product_code = body?.product_code;
    this.sku = body?.sku;
    this.theme = body?.theme;
    this.categories_id = body?.categories_id;
    this.tags = body?.tags;
    this.production_type = body?.production_type;
    this.provider_id = body?.provider_id;
    this.production_cost = body?.production_cost;
    this.production_procedure = body?.production_procedure;
    this.datasheet = body?.datasheet;
    this.videos_id = body?.videos_id;
    this.images_id = body?.images_id;
    this.tax_information = body?.tax_information;
    this.purchase_history = body?.purchase_history;
    this.feedbacks_history = body?.feedbacks_history;
  }
}
