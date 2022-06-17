import { Schema } from 'mongoose';
import  Ad from '../../schemas/Ad';

import {
   AdCreatingDto,
   AdCreatedDto,
   AdToUpdateDto,
} from './dto/index.dto';

class  AdRepository {
  async create( ad:  AdCreatingDto): Promise< AdCreatedDto> {
    const  adCreate = new  Ad( ad);

    if (await  adCreate.save()) {
      return  adCreate;
    }

    throw new Error(`Error to create  ad`);
  }

  async getOneById(id: Schema.Types.ObjectId): Promise< AdCreatedDto> {
    const  ad:  AdCreatedDto = await  Ad.findById(id);
    if ( ad) return  ad;

    throw new Error(`Error to get  ad`);
  }

  async listAll(
    key: string,
    sort: string,
    itensPerPage: number,
    pagination: number,
  ): Promise<Array< AdCreatedDto>> {
    const  ads: Array< AdCreatedDto> = await  Ad.find({}, (err, docs) => {
      if (!err) return docs;
    })
      .sort([[key, sort]])
      .skip(pagination)
      .limit(itensPerPage)
      .exec();

    if ( ads) return  ads;

    throw new Error(`Error to list categories`);
  }

  async updateById(
    id: Schema.Types.ObjectId,
    data:  AdToUpdateDto,
  ): Promise< AdCreatedDto> {
    const updated Ad:  AdCreatedDto = await  Ad.findByIdAndUpdate(
      id,
      data,
      (error, document) => {
        if (!error) return document;
      },
    );

    if (updated Ad) return updated Ad;

    throw new Error(`Error to update  ad`);
  }

  async deleteById(id: Schema.Types.ObjectId): Promise<Boolean> {
    if (await  Ad.deleteOne({ _id: id })) return true;

    throw new Error(`Error to delete  ad`);
  }
}

export default new  AdRepository();
