import { Schema } from 'mongoose';

export class ProviderToUpdateDto {
  person_id: Schema.Types.ObjectId;

  itens_id: Array<Schema.Types.ObjectId>;

  constructor(body: ProviderToUpdateDto) {
    this.person_id = body?.person_id;
    this.itens_id = body?.itens_id;
  }
}
