import { Document } from 'mongoose';

import Factory from '../../schemas/Factory';

import { FactoryCreateDto } from './dto/factory-create.dto';
import { IFactory } from './factory.interface';

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
