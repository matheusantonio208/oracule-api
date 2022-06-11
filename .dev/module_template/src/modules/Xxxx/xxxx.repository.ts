import { Document } from 'mongoose';

import Xxxx from '../../schemas/Xxxx';

import { XxxxDto, XxxxCreateDto } from './dto/index.dto';

class XxxxRepository {
  async create(xxxx: XxxxCreateDto): Promise<Document<XxxxDto>> {
    const xxxxCreate = new Xxxx(xxxx);

    if (await xxxxCreate.save()) {
      return xxxxCreate;
    }

    throw new Error(`Error to create xxxx`);
  }

  async getOneById(id: string): Promise<Document<XxxxDto>> {
    const xxxx: Document<XxxxDto> = await Xxxx.findById(id);
    if (xxxx) return xxxx;

    throw new Error(`Error to get xxxx`);
  }

  async listAll(): Promise<Array<Document<XxxxDto>>> {
    const xxxxs: Array<Document<XxxxDto>> = await Xxxx.find({}, (err, docs) => {
      if (!err) return docs;
    });

    if (xxxxs) return xxxxs;

    throw new Error(`Error to list categories`);
  }

  async updateById(id: string, data: any): Promise<Document<XxxxDto>> {
    const updatedXxxx: Document<XxxxDto> = await Xxxx.findByIdAndUpdate(
      id,
      data,
      (error, document) => {
        if (!error) return document;
      },
    );

    if (updatedXxxx) return updatedXxxx;

    throw new Error(`Error to update xxxx`);
  }

  async deleteById(id: string): Promise<Boolean> {
    if (await Xxxx.deleteOne({ _id: id })) return true;

    throw new Error(`Error to delete xxxx`);
  }
}

export default new XxxxRepository();
