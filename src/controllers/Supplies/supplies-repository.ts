import { Document } from 'mongoose';

import Supplies from '../../schemas/Supplies';

import { SuppliesCreateDto } from './dto/supplies-create-dto';
import { ISupplies } from './supplies-interface';

class SuppliesRepository {
  async create(supplies: SuppliesCreateDto): Promise<Document<ISupplies>> {
    const suppliesCreate = new Supplies(supplies);

    if (await suppliesCreate.save()) {
      return suppliesCreate;
    }

    throw new Error(`Error to create`);
  }
}

export default new SuppliesRepository();
