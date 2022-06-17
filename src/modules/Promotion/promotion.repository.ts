import { Schema } from 'mongoose';
import Promotion from '../../schemas/Promotion';

import {
  PromotionCreatingDto,
  PromotionCreatedDto,
  PromotionToUpdateDto,
} from './dto/index.dto';

class PromotionRepository {
  async create(promotion: PromotionCreatingDto): Promise<PromotionCreatedDto> {
    const promotionCreate = new Promotion(promotion);

    if (await promotionCreate.save()) {
      return promotionCreate;
    }

    throw new Error(`Error to create promotion`);
  }

  async getOneById(id: Schema.Types.ObjectId): Promise<PromotionCreatedDto> {
    const promotion: PromotionCreatedDto = await Promotion.findById(id);
    if (promotion) return promotion;

    throw new Error(`Error to get promotion`);
  }

  async listAll(
    property: string,
    sort: string,
    itensPerPage: number,
    pagination: number,
  ): Promise<Array<PromotionCreatedDto>> {
    const promotions: Array<PromotionCreatedDto> = await Promotion.find(
      {},
      (err, docs) => {
        if (!err) return docs;
      },
    )
      .sort([[property, sort]])
      .skip(pagination)
      .limit(itensPerPage)
      .exec();

    if (promotions) return promotions;

    throw new Error(`Error to list categories`);
  }

  async updateById(
    id: Schema.Types.ObjectId,
    data: PromotionToUpdateDto,
  ): Promise<PromotionCreatedDto> {
    const updatedPromotion: PromotionCreatedDto =
      await Promotion.findByIdAndUpdate(id, data, (error, document) => {
        if (!error) return document;
      });

    if (updatedPromotion) return updatedPromotion;

    throw new Error(`Error to update promotion`);
  }

  async deleteById(id: Schema.Types.ObjectId): Promise<Boolean> {
    if (await Promotion.deleteOne({ _id: id })) return true;

    throw new Error(`Error to delete promotion`);
  }
}

export default new PromotionRepository();
