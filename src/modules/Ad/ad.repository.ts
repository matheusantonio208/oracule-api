import Ad from '../../schemas/Ad';

import { AdCreatedDto, AdCreateDto } from './dto/index.dto';

class AdRepository {
  async create(ad: AdCreateDto): Promise<AdCreatedDto> {
    const adCreate = new Ad(ad);

    if (await adCreate.save()) return adCreate;

    throw new Error(`Error to create ad`);
  }

  async getOneById(id: string): Promise<AdCreatedDto> {
    const ad: AdCreatedDto = await Ad.findById(id);
    if (ad) return ad;

    throw new Error(`Error to get ad`);
  }

  async listAll(): Promise<Array<AdCreatedDto>> {
    const ads: Array<AdCreatedDto> = await Ad.find({}, (err, docs) => {
      if (!err) return docs;
    });

    if (ads) return ads;

    throw new Error(`Error to list categories`);
  }

  async updateById(id: string, data: any): Promise<AdCreatedDto> {
    const updatedAd: AdCreatedDto = await Ad.findByIdAndUpdate(
      id,
      data,
      (error, document) => {
        if (!error) return document;
      },
    );

    if (updatedAd) return updatedAd;

    throw new Error(`Error to update ad`);
  }

  async deleteById(id: string): Promise<Boolean> {
    if (await Ad.deleteOne({ _id: id })) return true;

    throw new Error(`Error to delete ad`);
  }
}

export default new AdRepository();
