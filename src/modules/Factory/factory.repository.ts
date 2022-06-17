import { Document } from 'mongoose';

import Factory from '../../schemas/Factory';

import {
  FactoryToCreateDto,
  FactoryCreatingDto,
  FactoryCreatedDto,
  FactoryToUpdateDto,
} from './dto/index.dto';

class FactoryRepository {
  async create(factory: FactoryCreateDto): Promise<Document<IFactory>> {
    const factoryCreate = new Factory(factory);

    if (await factoryCreate.save()) {
      return factoryCreate;
    }

    throw new Error(`Error to create ${factory.name}`);
  }
}

export default new FactoryRepository();
