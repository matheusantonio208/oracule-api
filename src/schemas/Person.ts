import { model, Schema } from 'mongoose';

import { IPerson } from '../controllers/Person/person.interface';

const personSchema = new Schema<IPerson>(
  {
    image_profile_id: [
      {
        type: Schema.Types.ObjectId,
        ref: 'products',
      },
    ],
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

    site: String,

    name: String,
    nick_name: String,

    cpf: String,
    rg: String,

    email: String,
    email_invoice: String,

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

export default model<IPerson>('persons', personSchema);
