import { Schema } from 'mongoose';

export class ProviderCreatedDto {
  person_id: Schema.Types.ObjectId;

  itens_id: Array<Schema.Types.ObjectId>;

  constructor(body: ProviderCreatedDto) {
    this.person_id = body?.person_id;
    this.itens_id = body?.itens_id;
  }
}
