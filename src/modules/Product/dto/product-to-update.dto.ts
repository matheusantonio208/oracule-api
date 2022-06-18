import { IMulterRequest } from '@types';
import { Schema } from 'mongoose';

export class ProductToUpdateDto {
  name: string;

  theme: string;

  category_id: Schema.Types.ObjectId;

  tags: string[];

  production_type: string;

  provider_id?: Schema.Types.ObjectId;

  production_cost: number;

  production_procedure: [
    {
      order: number;
      name: string;
      description: string;
      time_in_minutes: number;
      feedstock_id: Schema.Types.ObjectId[];
      machines_id: Schema.Types.ObjectId[];
      tools_id: Schema.Types.ObjectId[];
      employee_id: Schema.Types.ObjectId[];
      supplies: [
        {
          supply_id: Schema.Types.ObjectId;
          amount: number;
        },
      ];
      files_production: Schema.Types.ObjectId[];
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

  videos_id?: IMulterRequest[];

  images_id: IMulterRequest[];

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

  constructor(body: ProductToUpdateDto) {
    this.name = body?.name;
    this.theme = body?.theme;
    this.tags = body?.tags;
    this.production_type = body?.production_type;
    this.provider_id = body?.provider_id;
    this.production_cost = body?.production_cost;
    this.production_procedure = body?.production_procedure;
    this.datasheet = body?.datasheet;
    this.videos_id = body?.videos_id;
    this.images_id = body?.images_id;
    this.tax_information = body?.tax_information;
  }
}
