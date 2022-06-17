import { Schema } from 'mongoose';
import Provider from '../../schemas/Provider';

import {
  ProviderCreatingDto,
  ProviderCreatedDto,
  ProviderToUpdateDto,
} from './dto/index.dto';

class ProviderRepository {
  async create(provider: ProviderCreatingDto): Promise<ProviderCreatedDto> {
    const providerCreate = new Provider(provider);

    if (await providerCreate.save()) {
      return providerCreate;
    }

    throw new Error(`Error to create provider`);
  }

  async getOneById(id: Schema.Types.ObjectId): Promise<ProviderCreatedDto> {
    const provider: ProviderCreatedDto = await Provider.findById(id);
    if (provider) return provider;

    throw new Error(`Error to get provider`);
  }

  async listAll(
    property: string,
    sort: string,
    itensPerPage: number,
    pagination: number,
  ): Promise<Array<ProviderCreatedDto>> {
    const providers: Array<ProviderCreatedDto> = await Provider.find(
      {},
      (err, docs) => {
        if (!err) return docs;
      },
    )
      .sort([[property, sort]])
      .skip(pagination)
      .limit(itensPerPage)
      .exec();

    if (providers) return providers;

    throw new Error(`Error to list categories`);
  }

  async updateById(
    id: Schema.Types.ObjectId,
    data: ProviderToUpdateDto,
  ): Promise<ProviderCreatedDto> {
    const updatedProvider: ProviderCreatedDto =
      await Provider.findByIdAndUpdate(id, data, (error, document) => {
        if (!error) return document;
      });

    if (updatedProvider) return updatedProvider;

    throw new Error(`Error to update provider`);
  }

  async deleteById(id: Schema.Types.ObjectId): Promise<Boolean> {
    if (await Provider.deleteOne({ _id: id })) return true;

    throw new Error(`Error to delete provider`);
  }
}

export default new ProviderRepository();
