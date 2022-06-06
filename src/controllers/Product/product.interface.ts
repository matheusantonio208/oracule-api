import { Schema } from 'mongoose';

export interface IProductCreate {
  name: string;
  mockups_id: [
    {
      type: Schema.Types.ObjectId;
      ref: 'files';
    },
  ];
  categories_id: [
    {
      type: Schema.Types.ObjectId;
      ref: 'categories';
    },
  ];

  theme: string;

  tags: [
    {
      type: string;
    },
  ];

  production_type: {
    type: string;
    enum: ['own', 'outsourced'];
  };

  provider_id?: {
    type: Schema.Types.ObjectId;
    ref: 'providers';
  };

  production_cost: number;

  production_procedure: [
    {
      order_step: number;

      name_step: string;

      description_step: string;

      time_in_minutes: number;

      feedstock_id: [
        {
          type: Schema.Types.ObjectId;
          ref: 'feedstock';
        },
      ];

      machine_id: {
        type: Schema.Types.ObjectId;
        ref: 'machines';
      };

      tools_id: [
        {
          type: Schema.Types.ObjectId;
          ref: 'tools';
        },
      ];

      employee_id: [
        {
          type: Schema.Types.ObjectId;
          ref: 'employees';
        },
      ];

      supplies: [
        {
          supplies_id: {
            type: Schema.Types.ObjectId;
            ref: 'supplies';
          };
          amount: number;
        },
      ];

      files_production: [
        {
          type: Schema.Types.ObjectId;
          ref: 'files';
        },
      ];
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
}
export interface IProduct {
  name: string;

  product_code: number;

  sku: {
    type: String;
    unique: true;
  };

  tags: [
    {
      type: string;
    },
  ];

  production_type: {
    type: string;
    enum: ['own', 'outsourced'];
  };

  provider_id?: {
    type: Schema.Types.ObjectId;
    ref: 'providers';
  };

  production_cost: number;

  production_procedure: [
    {
      order_step: number;

      name_step: string;

      description_step: string;

      time_in_minutes: number;

      feedstock_id: [
        {
          type: Schema.Types.ObjectId;
          ref: 'feedstock';
        },
      ];

      machine_id: {
        type: Schema.Types.ObjectId;
        ref: 'machines';
      };

      tools_id: [
        {
          type: Schema.Types.ObjectId;
          ref: 'tools';
        },
      ];

      employee_id: [
        {
          type: Schema.Types.ObjectId;
          ref: 'employees';
        },
      ];

      supplies: [
        {
          supplies_id: {
            type: Schema.Types.ObjectId;
            ref: 'supplies';
          };

          amount: number;
        },
      ];

      files_production: [
        {
          type: Schema.Types.ObjectId;
          ref: 'files';
        },
      ];
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

  // video_id: {
  //   type: Schema.Types.ObjectId;
  //   ref: 'videos_product';
  // };
  // brand_id: {
  //   type: Schema.Types.ObjectId;
  //   ref: 'brands';
  // };
}

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
			"supplies_id": "123",
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
