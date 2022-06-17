import { IRequest, IResponse } from '../../@types';
import {
  PromotionToCreateDto,
  PromotionCreatingDto,
  PromotionCreatedDto,
  PromotionToUpdateDto,
} from './dto/index.dto';
import promotionRepository from './promotion.repository';

// import promotionService from './promotion.service';

class PromotionController {
  async store(req: IRequest, res: IResponse) {
    try {
      // === Get Vars === //
      const promotion: PromotionToCreateDto = new PromotionToCreateDto(
        req.body,
      );

      // === Generate Vars === //
      // const promotionProperty: number =
      // await promotionService.serviceFunction();

      // === Create Dto === //
      const promotionCreatingDto: PromotionCreatingDto =
        new PromotionCreatingDto({
          ...promotion,
          // code: promotionCode
        });

      // === Create Object === //
      const promotionCreated: PromotionCreatedDto =
        await promotionRepository.create(promotionCreatingDto);

      return res.status(201).json(promotionCreated);
    } catch (error) {
      return res.status(401).json({ error_msg: `Error! ${error}` });
    }
  }

  async index(req: IRequest, res: IResponse) {
    try {
      const { id } = req.params;

      const promotion: PromotionCreatedDto =
        await promotionRepository.getOneById(id);

      return res.status(201).json(promotion);
    } catch (error) {
      return res.status(401).json({ error_msg: `Error! ${error}` });
    }
  }

  async show(req: IRequest, res: IResponse) {
    try {
      const { property, sort, itensPerPage, pagination } = req.query;

      const promotion: Array<PromotionCreatedDto> =
        await promotionRepository.listAll(
          property,
          sort,
          itensPerPage,
          pagination,
        );

      return res.status(201).json(promotion);
    } catch (error) {
      return res.status(401).json({ error_msg: `Error! ${error}` });
    }
  }

  async delete(req: IRequest, res: IResponse) {
    try {
      const { id } = req.params;

      await promotionRepository.deleteById(id);

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
      const data: PromotionToUpdateDto = new PromotionToUpdateDto(req.body);

      const promotionUpdated: PromotionCreatedDto =
        await promotionRepository.updateById(id, data);

      return res.status(201).json(promotionUpdated);
    } catch (error) {
      return res.status(401).json({ error_msg: `Error! ${error}` });
    }
  }
}

export default new PromotionController();
