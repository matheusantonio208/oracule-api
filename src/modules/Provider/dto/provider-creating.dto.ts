import { Schema } from 'mongoose';

export class ProviderCreatingDto {
  person_id: Schema.Types.ObjectId;

  itens_id: Array<Schema.Types.ObjectId>;

  constructor(body: ProviderCreatingDto) {
    this.person_id = body?.person_id;
    this.itens_id = body?.itens_id;
  }
}
