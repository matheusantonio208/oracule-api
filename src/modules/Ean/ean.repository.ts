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

  async getOneById(id: Schema.Types.ObjectId): Promise<EanCreatedDto> {
    const ean: EanCreatedDto = await Ean.findById(id);
    if (ean) return ean;

    throw new Error(`Error to get ean`);
  }

  async getOneByEan(eanFind: string): Promise<string> {
    const { ean } = await Ean.findOne({ ean: eanFind });

    if (ean) return ean;

    throw new Error(`Error to get ean`);
  }

  async listAll(): Promise<Array<EanCreatedDto>> {
    const eans: Array<EanCreatedDto> = await Ean.find({}, (err, docs) => {
      if (!err) return docs;
    });

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
      },
    );

    if (updatedEan) return updatedEan;

    throw new Error(`Error to update ean`);
  }

  async deleteById(id: Schema.Types.ObjectId): Promise<Boolean> {
    if (await Ean.deleteOne({ _id: id })) return true;

    throw new Error(`Error to delete ean`);
  }
}

export default new EanRepository();
