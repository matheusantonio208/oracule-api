import { Document } from 'mongoose';

import {
  SuppliesCreatingDto,
  SuppliesCreatedDto,
  SuppliesToUpdateDto,
} from './dto/index.dto';

import Supplies from '../../schemas/Supplies';

class SuppliesRepository {
  async create(supplies: SuppliesCreateDto): Promise<Document<ISupplies>> {
    const suppliesCreate = new Supplies(supplies);

    if (await suppliesCreate.save()) {
      return suppliesCreate;
    }

    throw new Error(`Error to create supplies`);
  }

  async getOneById(id: Schema.Types.ObjectId;): Promise<Document<ISupplies>> {
    const supplies: Document<ISupplies> = await Supplies.findById(id);
    if (supplies) return supplies;

    throw new Error(`Error to get supplies`);
  }

  async listAll(): Promise<Array<Document<ISupplies>>> {
    const supplies: Array<Document<ISupplies>> = await Supplies.find(
      {},
      (err, docs) => {
        if (!err) return docs;
      },
    );

    if (supplies) return supplies;

    throw new Error(`Error to list categories`);
  }

  async updateById(id: Schema.Types.ObjectId;, data: any): Promise<Document<ISupplies>> {
    const updatedSupplies: Document<ISupplies> =
      await Supplies.findByIdAndUpdate(id, data, (error, document) => {
        if (!error) return document;
      });

    if (updatedSupplies) return updatedSupplies;

    throw new Error(`Error to update supplies`);
  }

  async deleteById(id: Schema.Types.ObjectId;): Promise<Boolean> {
    if (await Supplies.deleteOne({ _id: id })) return true;

    throw new Error(`Error to delete supplies`);
  }
}

export default new SuppliesRepository();
