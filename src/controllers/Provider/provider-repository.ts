import { Document } from 'mongoose';

import Provider from '../../schemas/Provider';

import { ProviderCreateDto } from './dto/provider-create-dto';
import { IProvider } from './provider-interface';

class ProviderRepository {
  async create(provider: ProviderCreateDto): Promise<Document<IProvider>> {
    const providerCreate = new Provider(provider);

    if (await providerCreate.save()) {
      return providerCreate;
    }

    throw new Error(`Error to create ${provider.name}`);
  }
}

export default new ProviderRepository();
