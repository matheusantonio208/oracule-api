import { Document } from 'mongoose';

import Xxxx from '../../schemas/Xxxx';

import { XxxxCreateDto } from './dto/xxxx-create.dto';
import { IXxxx } from './xxxx.interface';

class XxxxRepository {
  async create(xxxx: XxxxCreateDto): Promise<Document<IXxxx>> {
    const xxxxCreate = new Xxxx(xxxx);

    if (await xxxxCreate.save()) {
      return xxxxCreate;
    }

    throw new Error(`Error to create xxxx`);
  }

  async getOneById(id: string): Promise<Document<IXxxx>> {
    const xxxx: Document<IXxxx> = await Xxxx.findById(id);
    if (xxxx) return xxxx;

    throw new Error(`Error to get xxxx`);
  }

  async listAll(): Promise<Array<Document<IXxxx>>> {
    const xxxxs: Array<Document<IXxxx>> = await Xxxx.find({}, (err, docs) => {
      if (!err) return docs;
    });

    if (xxxxs) return xxxxs;

    throw new Error(`Error to list categories`);
  }

  async updateById(id: string, data: any): Promise<Document<IXxxx>> {
    const updatedXxxx: Document<IXxxx> = await Xxxx.findByIdAndUpdate(
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
