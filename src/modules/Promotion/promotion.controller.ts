import { Document } from 'mongoose';
import { IRequest, IResponse } from '../../@types';
import {
  PromotionToCreateDto,
  PromotionCreatingDto,
  PromotionCreatedDto,
  PromotionToUpdateDto,
} from './dto/index.dto';
import PromotionRepository from './promotion.repository';

class PromotionController {
  async store(req: IRequest, res: IResponse) {
    try {
      const promotionCreateDto: PromotionCreateDto = new PromotionCreateDto(
        req.body,
      );

      const promotionCreated: Document<IPromotion> =
        await PromotionRepository.create(promotionCreateDto);

      return res.status(201).json(promotionCreated);
    } catch (error) {
      return res.status(401).json({ error_msg: `Error! ${error}` });
    }
  }

  async index(req: IRequest, res: IResponse) {
    try {
      const { id } = req.params;

      const promotion: Document<IPromotion> =
        await PromotionRepository.getOneById(id);

      return res.status(201).json(promotion);
    } catch (error) {
      return res.status(401).json({ error_msg: `Error! ${error}` });
    }
  }

  async show(req: IRequest, res: IResponse) {
    try {
      const promotion: Array<Document<IPromotion>> =
        await PromotionRepository.listAll();

      return res.status(201).json(promotion);
    } catch (error) {
      return res.status(401).json({ error_msg: `Error! ${error}` });
    }
  }

  async delete(req: IRequest, res: IResponse) {
    try {
      const { id } = req.params;

      await PromotionRepository.deleteById(id);

      return res
        .status(201)
        .json({ success_msg: `Success! Your promotion was deleted` });
    } catch (error) {
      return res.status(401).json({ error_msg: `Error! ${error}` });
    }
  }

  async update(req: IRequest, res: IResponse) {
    try {
      const { id } = req.params;
      const data = req.body;

      const promotionUpdated = await PromotionRepository.updateById(id, data);

      return res.status(201).json(promotionUpdated);
    } catch (error) {
      return res.status(401).json({ error_msg: `Error! ${error}` });
    }
  }
}

export default new PromotionController();
