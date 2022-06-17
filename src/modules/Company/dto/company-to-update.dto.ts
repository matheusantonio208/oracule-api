import { Schema } from 'mongoose';

export class CompanyToUpdateDto {
  corporate_name?: string;

  fantasy_name?: string;

  cnpj?: string;

  ie?: string;

  im?: string;

  bio?: string;

  tax_regime_code?: string;

  company_size?: string;

  contact?: {
    phone?: {
      name?: string;
      number?: string;
    };
    email?: string;
    site?: string;
  };

  address?: {
    two?: string;
    number?: string;
    complement?: string;
    district?: string;
    city?: string;
    state?: string;
    zip_code?: string;
  };

  logo_id?: Schema.Types.ObjectId;

  constructor(body?: CompanyToUpdateDto) {
    this.corporate_name = body?.corporate_name;
    this.fantasy_name = body?.fantasy_name;
    this.cnpj = body?.cnpj;
    this.ie = body?.ie;
    this.im = body?.im;
    this.bio = body?.bio;
    this.tax_regime_code = body?.tax_regime_code;
    this.company_size = body?.company_size;
    this.contact = body?.contact;
    this.address = body?.address;
    this.logo_id = body?.logo_id;
  }
}
