import { Schema } from 'mongoose';

export class ProductCreateDto {
  name: string;
  product_code: string;
  sku: string;
  categories_id: Array<Schema.Types.ObjectId>;
  theme: string;
  tags: Array<string>;
  production_type: string; //['own', 'outsourced']
  provider_id?: Schema.Types.ObjectId;
  production_cost: number;
  production_procedure: [
    {
      order_step: number;
      name_step: string;
      description_step: string;
      time_in_minutes: number;
      feedstock_id: Array<Schema.Types.ObjectId>;
      machine_id: Schema.Types.ObjectId;
      tools_id: Array<Schema.Types.ObjectId>;
      employee_id: Array<Schema.Types.ObjectId>;
      supplies: [
        {
          supplies_id: Schema.Types.ObjectId;
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

  constructor(body) {
    this.name = body?.name;
    this.categories_id = body?.categories_id;
    this.theme = body?.theme;
    this.tags = body?.tags;
    this.production_type = body?.production_type;
    this.provider_id = body?.provider_id;
    this.production_cost = body?.production_cost;
    this.production_procedure = body?.production_procedure;
    this.datasheet = body?.datasheet;
  }
}
