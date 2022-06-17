import { IMulterRequest } from '@types';
import { Schema } from 'mongoose';

export class PersonToCreateDto {
  image_profile_file: IMulterRequest;

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

  constructor(body: PersonToCreateDto) {
    this.image_profile_file = body?.image_profile_file;
    this.person_type = body?.person_type;
    this.company_name = body?.company_name;
    this.fantasy_name = body?.fantasy_name;
    this.cnpj = body?.cnpj;
    this.state_registration = body?.state_registration;
    this.taxpayer = body?.taxpayer;
    this.site = body?.site;
    this.name = body?.name;
    this.nick_name = body?.nick_name;
    this.cpf = body?.cpf;
    this.rg = body?.rg;
    this.email = body?.email;
    this.email_invoice = body?.email_invoice;
    this.phone_numbers = body?.phone_numbers;
    this.address = body?.address;
  }
}
