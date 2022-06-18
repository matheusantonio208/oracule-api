import { Schema } from 'mongoose';

import Ean from '../../schemas/Ean';
import { EanCreatingDto, EanCreatedDto, EanToUpdateDto } from './dto/index.dto';

class EanRepository {
  async create(ean: EanCreatingDto): Promise<EanCreatedDto> {
    const eanCreate = new Ean(ean);

    if (await eanCreate.save()) {
      return eanCreate;
    }

    throw new Error(`Error to create ean`);
  }

  async getOneById(id: string): Promise<EanCreatedDto> {
    const ean: EanCreatedDto = await Ean.findById(id);
    if (ean) return ean;

    throw new Error(`Error to get ean`);
  }

  async listAll(
    property: string,
    sort: string,
    itensPerPage: number,
    pagination: number,
  ): Promise<Array<EanCreatedDto>> {
    const eans: Array<EanCreatedDto> = await Ean.find({}, (error, docs) => {
      if (!error) return docs;
      throw error;
    })
      .sort([[property, sort]])
      .skip(pagination)
      .limit(itensPerPage)
      .exec();

    if (eans) return eans;

    throw new Error(`Error to list categories`);
  }

  async updateById(
    id: Schema.Types.ObjectId,
    data: EanToUpdateDto,
  ): Promise<EanCreatedDto> {
    const updatedEan: EanCreatedDto = await Ean.findByIdAndUpdate(
      id,
      data,
      (error, document) => {
        if (!error) return document;
        throw error;
      },
    );

    if (updatedEan) return updatedEan;

    throw new Error(`Error to update ean`);
  }

  async deleteById(id: string): Promise<Boolean> {
    if (await Ean.deleteOne({ _id: id })) return true;

    throw new Error(`Error to delete ean`);
  }
}

export default new EanRepository();
