import { Document } from 'mongoose';

import Ad from '../../schemas/Ad';

import { AdCreateDto } from './dto/ad-create-dto';
import { IAd } from './ad-interface';

class AdRepository {
  async create(ad: AdCreateDto): Promise<Document<IAd>> {
    const adCreate = new Ad(ad);

    if (await adCreate.save()) {
      return adCreate;
    }

    throw new Error(`Error to create ad`);
  }
}

export default new AdRepository();
