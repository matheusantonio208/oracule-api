import { Document } from 'mongoose';

import Promotion from '../../schemas/Promotion';

import { PromotionCreateDto } from './dto/promotion-create.dto';
import { IPromotion } from './promotion.interface';

class PromotionRepository {
  async create(promotion: PromotionCreateDto): Promise<Document<IPromotion>> {
    const promotionCreate = new Promotion(promotion);

    if (await promotionCreate.save()) {
      return promotionCreate;
    }

    throw new Error(`Error to create promotion`);
  }

  async getOneById(id: string): Promise<Document<IPromotion>> {
    const promotion: Document<IPromotion> = await Promotion.findById(id);
    if (promotion) return promotion;

    throw new Error(`Error to get promotion`);
  }

  async listAll(): Promise<Array<Document<IPromotion>>> {
    const promotions: Array<Document<IPromotion>> = await Promotion.find(
      {},
      (err, docs) => {
        if (!err) return docs;
      },
    );

    if (promotions) return promotions;

    throw new Error(`Error to list categories`);
  }

  async updateById(id: string, data: any): Promise<Document<IPromotion>> {
    const updatedPromotion: Document<IPromotion> =
      await Promotion.findByIdAndUpdate(id, data, (error, document) => {
        if (!error) return document;
      });

    if (updatedPromotion) return updatedPromotion;

    throw new Error(`Error to update promotion`);
  }

  async deleteById(id: string): Promise<Boolean> {
    if (await Promotion.deleteOne({ _id: id })) return true;

    throw new Error(`Error to delete promotion`);
  }
}

export default new PromotionRepository();
