import { Schema } from 'mongoose';

import Supplies from '../../schemas/Supplies';
import {
  SuppliesCreatingDto,
  SuppliesCreatedDto,
  SuppliesToUpdateDto,
} from './dto/index.dto';

class SuppliesRepository {
  async create(supplies: SuppliesCreatingDto): Promise<SuppliesCreatedDto> {
    const suppliesCreate = new Supplies(supplies);

    if (await suppliesCreate.save()) {
      return suppliesCreate;
    }

    throw new Error(`Error to create supplies`);
  }

  async getOneById(id: Schema.Types.ObjectId): Promise<SuppliesCreatedDto> {
    const supplies: SuppliesCreatedDto = await Supplies.findById(id);
    if (supplies) return supplies;

    throw new Error(`Error to get supplies`);
  }

  async listAll(
    property: string,
    sort: string,
    itensPerPage: number,
    pagination: number,
  ): Promise<Array<SuppliesCreatedDto>> {
    const suppliess: Array<SuppliesCreatedDto> = await Supplies.find(
      {},
      (error, docs) => {
        if (!error) return docs;
        throw error;
      },
    )
      .sort([[property, sort]])
      .skip(pagination)
      .limit(itensPerPage)
      .exec();

    if (suppliess) return suppliess;

    throw new Error(`Error to list categories`);
  }

  async updateById(
    id: Schema.Types.ObjectId,
    data: SuppliesToUpdateDto,
  ): Promise<SuppliesCreatedDto> {
    const updatedSupplies: SuppliesCreatedDto =
      await Supplies.findByIdAndUpdate(id, data, (error, document) => {
        if (!error) return document;
        throw error;
      });

    if (updatedSupplies) return updatedSupplies;

    throw new Error(`Error to update supplies`);
  }

  async deleteById(id: Schema.Types.ObjectId): Promise<Boolean> {
    if (await Supplies.deleteOne({ _id: id })) return true;

    throw new Error(`Error to delete supplies`);
  }
}

export default new SuppliesRepository();
