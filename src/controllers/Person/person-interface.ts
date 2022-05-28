import { Schema } from 'mongoose';

export interface IPerson {
  image_profile_id: [
    {
      type: Schema.Types.ObjectId;
      ref: 'products';
    },
  ];
  person_type: {
    type: string;
    enum: ['physical', 'legal'];
  };

  company_name: string;
  fantasy_name: string;

  cnpj: string;
  state_registration: string;

  taxpayer: {
    type: string;
    enum: ['icms', 'withoutIcms', 'non-taxpayer'];
  };

  site: string;

  name: string;
  nick_name: string;

  cpf: string;
  rg: string;

  email: string;
  email_invoice: string;

  phone_numbers: [
    {
      phone_name: string;
      phone_number: string;
    },
  ];

  address: [
    {
      address: string;
      number: string;
      complement: string;
      district: string;
      zip_code: string;
      city: string;
      state: string;
    },
  ];
}
