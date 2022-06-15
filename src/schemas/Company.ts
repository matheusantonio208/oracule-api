import { model, Schema } from 'mongoose';

import { CompanyCreatedDto } from '../modules/Company/dto/index.dto';

const companySchema = new Schema<CompanyCreatedDto>(
  {
    corporate_name: String,
    fantasy_name: String,
    cnpj: String,
    ie: String,
    im: String,
    bio: String,
    tax_regime_code: {
      type: String,
      enum: ['SIMPLES', 'SIMPLES_NACIONAL', 'SIMPLES_EXCESSO', 'NORMAL'],
    },
    company_size: {
      type: String,
      enum: ['MEI', 'MICRO', 'PEQUENA', 'MEDIA', 'GRANDE'],
    },
    contact: {
      phone: {
        name: String,
        number: String,
      },
      email: String,
      site: String,
    },
    address: {
      two: String,
      number: String,
      complement: String,
      district: String,
      city: String,
      state: String,
      zip_code: String,
    },
    logo_id: {
      type: Schema.Types.ObjectId,
      ref: 'files',
    },
  },
  { timestamps: true },
);

export default model<CompanyCreatedDto>('companies', companySchema);
