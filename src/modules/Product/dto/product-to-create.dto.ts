import { Schema } from 'mongoose';

export class ProductToCreateDto {
  name: string;
  theme: string;
  categories_id: Array<Schema.Types.ObjectId>;
  tags: Array<string>;
  production_type: string;
  provider_id?: Schema.Types.ObjectId;
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
    expiration_time_in_days?: number;
  };
  video_id?: Schema.Types.ObjectId;
  image_id: Schema.Types.ObjectId;

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

  constructor(body: ProductToCreateDto) {
    this.name = body?.name;
    this.theme = body?.theme;
    this.categories_id = body?.categories_id;
    this.tags = body?.tags;
    this.production_type = body?.production_type;
    this.provider_id = body?.provider_id;
    this.production_procedure = body?.production_procedure;
    this.datasheet = body?.datasheet;
    this.video_id = body?.video_id;
    this.image_id = body?.image_id;
    this.tax_information = body?.tax_information;
  }
}
