import { Schema } from 'mongoose';

export class PersonCreatedDto {
  image_profile_id: Schema.Types.ObjectId;
  person_type: string;
  company_name: string;
  fantasy_name: string;
  cnpj: string;
  state_registration: string;
  taxpayer: string;
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

  constructor(body: PersonCreatedDto) {
    this.image_profile_id = body?.image_profile_id;
  }
}
