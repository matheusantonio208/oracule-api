import { model, Schema } from 'mongoose';

import { PersonCreatedDto } from '../modules/Person/dto/index.dto';

const personSchema = new Schema<PersonCreatedDto>(
  {
    image_profile_id: {
      type: Schema.Types.ObjectId,
      ref: 'products',
    },
    person_type: {
      type: String,
      enum: ['physical', 'legal'],
    },

    company_name: String,
    fantasy_name: String,
    cnpj: String,
    state_registration: String,
    taxpayer: {
      type: String,
      enum: ['icms', 'withoutIcms', 'non-taxpayer'],
    },

    name: String,
    nick_name: String,
    cpf: String,
    rg: String,

    email: String,
    email_invoice: String,
    site: String,

    phone_numbers: [
      {
        phone_name: String,
        phone_number: String,
      },
    ],

    address: [
      {
        address: String,
        number: String,
        complement: String,
        district: String,
        zip_code: String,
        city: String,
        state: String,
      },
    ],
  },
  { timestamps: true },
);

export default model<PersonCreatedDto>('persons', personSchema);
