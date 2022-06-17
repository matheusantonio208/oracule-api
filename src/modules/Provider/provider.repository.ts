import { Document } from 'mongoose';
import {
  ProviderToCreateDto,
  ProviderCreatingDto,
  ProviderCreatedDto,
  ProviderToUpdateDto,
} from './dto/index.dto';
import Provider from '../../schemas/Provider';

class ProviderRepository {
  async create(provider: ProviderCreateDto): Promise<Document<IProvider>> {
    const providerCreate = new Provider(provider);

    if (await providerCreate.save()) {
      return providerCreate;
    }

    throw new Error(`Error to create provider`);
  }

  async getOneById(id: Schema.Types.ObjectId;): Promise<Document<IProvider>> {
    const provider: Document<IProvider> = await Provider.findById(id);
    if (provider) return provider;

    throw new Error(`Error to get provider`);
  }

  async listAll(): Promise<Array<Document<IProvider>>> {
    const providers: Array<Document<IProvider>> = await Provider.find(
      {},
      (err, docs) => {
        if (!err) return docs;
      },
    );

    if (providers) return providers;

    throw new Error(`Error to list categories`);
  }

  async updateById(id: Schema.Types.ObjectId;, data: any): Promise<Document<IProvider>> {
    const updatedProvider: Document<IProvider> =
      await Provider.findByIdAndUpdate(id, data, (error, document) => {
        if (!error) return document;
      });

    if (updatedProvider) return updatedProvider;

    throw new Error(`Error to update provider`);
  }

  async deleteById(id: Schema.Types.ObjectId;): Promise<Boolean> {
    if (await Provider.deleteOne({ _id: id })) return true;

    throw new Error(`Error to delete provider`);
  }
}

export default new ProviderRepository();
