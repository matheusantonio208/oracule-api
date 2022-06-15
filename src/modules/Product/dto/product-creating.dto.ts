import { Schema } from 'mongoose';

export class ProductCreatingDto {
  name: string;
  product_code: number;
  sku: string;
  theme: string;
  categories_id: Array<Schema.Types.ObjectId>;
  tags: Array<string>;
  production_type: string;
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

  constructor(body: ProductCreatingDto) {
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
    this.video_id = body?.video_id;
    this.image_id = body?.image_id;
    this.tax_information = body?.tax_information;
  }
}

// brand_id: {
//   type: Schema.Types.ObjectId;
//   ref: 'brands';
// };

/* === Req Body Example ===
{
	"images_id": "123",
	"video_id": "123",
	"name": "Caneca Velozes e Furiosos em Tóquio",
	"product_code": "0001",
	"brand_id": "123",
	"categories_id": "1",
	"tags": "Filmes, Carros, Tóquio",
	"production_type": "own",
	"production_procedure": [{
		"order_step": 0,
		"name_step": "Imprimir Arte da Caneca",
		"description_step": "Imprimir a arte da caneca na impressora",
		"time_in_minutes": 1,
		"machine_id": "123",
		"tools_id": ["123", "456"],
		"employee_id": ["123"],
		"feedstock_id": ["123"],
		"supplies": [{
			"supply": "123",
			"amount": 1
		}],
		"files_production" : [{
			"name": "arte",
			"path": "src/assets/images/products/canecas/filmes/Velozes e furiosos/ Caneca Velozes e Furiosos em Tóquio"
		}],
		"datasheet": [{
			"weight_in_grams": 420,
			"width_in_cm": 10,
			"height_in_cm": 13,
			"depth_in_cm": 17,
			"material": "Cerâmica"
		}]
}]
}
*/