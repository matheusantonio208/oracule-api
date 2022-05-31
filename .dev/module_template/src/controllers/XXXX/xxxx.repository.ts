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
    const xxxx = await Xxxx.findById(id);
    if (xxxx) return xxxx;

    throw new Error(`Error to get xxxx`);
  }

  async listAll(): Promise<Array<Document<IXxxx>>> {
    const xxxxs = await Xxxx.find();

    if (xxxxs) return xxxxs;

    throw new Error(`Error to list xxxxs`);
  }

  async updateById(id: string, data: any): Promise<Document<IXxxx>> {
    const updatedXxxx = await Xxxx.findByIdAndUpdate(id, data);
    if (updatedXxxx) return updatedXxxx;

    throw new Error(`Error to update xxxx`);
  }

  async deleteById(id: string): Promise<Boolean> {
    if (await Xxxx.deleteOne({ _id: id })) return true;

    throw new Error(`Error to delete xxxx`);
  }
}

export default new XxxxRepository();
