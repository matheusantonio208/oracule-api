import { Schema } from 'mongoose';

import Factory from '../../schemas/Factory';
import {
  FactoryCreatingDto,
  FactoryCreatedDto,
  FactoryToUpdateDto,
} from './dto/index.dto';

class FactoryRepository {
  async create(factory: FactoryCreatingDto): Promise<FactoryCreatedDto> {
    const factoryCreate = new Factory(factory);

    if (await factoryCreate.save()) {
      return factoryCreate;
    }

    throw new Error(`Error to create factory`);
  }

  async getOneById(id: Schema.Types.ObjectId): Promise<FactoryCreatedDto> {
    const factory: FactoryCreatedDto = await Factory.findById(id);
    if (factory) return factory;

    throw new Error(`Error to get factory`);
  }

  async listAll(
    property: string,
    sort: string,
    itensPerPage: number,
    pagination: number,
  ): Promise<Array<FactoryCreatedDto>> {
    const factorys: Array<FactoryCreatedDto> = await Factory.find(
      {},
      (error, docs) => {
        if (!error) return docs;
      },
    )
      .sort([[property, sort]])
      .skip(pagination)
      .limit(itensPerPage)
      .exec();

    if (factorys) return factorys;

    throw new Error(`Error to list categories`);
  }

  async updateById(
    id: Schema.Types.ObjectId,
    data: FactoryToUpdateDto,
  ): Promise<FactoryCreatedDto> {
    const updatedFactory: FactoryCreatedDto = await Factory.findByIdAndUpdate(
      id,
      data,
      (error, document) => {
        if (!error) return document;
      },
    );

    if (updatedFactory) return updatedFactory;

    throw new Error(`Error to update factory`);
  }

  async deleteById(id: Schema.Types.ObjectId): Promise<Boolean> {
    if (await Factory.deleteOne({ _id: id })) return true;

    throw new Error(`Error to delete factory`);
  }
}

export default new FactoryRepository();
