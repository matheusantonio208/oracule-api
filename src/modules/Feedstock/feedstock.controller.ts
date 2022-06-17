import { IRequest, IResponse } from '../../@types';
import {
  FeedstockToCreateDto,
  FeedstockCreatingDto,
  FeedstockCreatedDto,
  FeedstockToUpdateDto,
} from './dto/index.dto';
import feedstockRepository from './feedstock.repository';

// import feedstockService from './feedstock.service';

class FeedstockController {
  async store(req: IRequest, res: IResponse) {
    try {
      // === Get Vars === //
      const feedstock: FeedstockToCreateDto = new FeedstockToCreateDto(
        req.body,
      );

      // === Generate Vars === //
      // const feedstockProperty: number =
      // await feedstockService.serviceFunction();

      // === Create Dto === //
      const feedstockCreatingDto: FeedstockCreatingDto =
        new FeedstockCreatingDto({
          ...feedstock,
          // code: feedstockCode
        });

      // === Create Object === //
      const feedstockCreated: FeedstockCreatedDto =
        await feedstockRepository.create(feedstockCreatingDto);

      return res.status(201).json(feedstockCreated);
    } catch (error) {
      return res.status(401).json({ error_msg: `Error! ${error}` });
    }
  }

  async index(req: IRequest, res: IResponse) {
    try {
      const { id } = req.params;

      const feedstock: FeedstockCreatedDto =
        await feedstockRepository.getOneById(id);

      return res.status(201).json(feedstock);
    } catch (error) {
      return res.status(401).json({ error_msg: `Error! ${error}` });
    }
  }

  async show(req: IRequest, res: IResponse) {
    try {
      const { property, sort, itensPerPage, pagination } = req.query;

      const feedstock: Array<FeedstockCreatedDto> =
        await feedstockRepository.listAll(
          property,
          sort,
          itensPerPage,
          pagination,
        );

      return res.status(201).json(feedstock);
    } catch (error) {
      return res.status(401).json({ error_msg: `Error! ${error}` });
    }
  }

  async delete(req: IRequest, res: IResponse) {
    try {
      const { id } = req.params;

      await feedstockRepository.deleteById(id);

      return res
        .status(201)
        .json({ success_msg: `Success! Your feedstock was deleted` });
    } catch (error) {
      return res.status(401).json({ error_msg: `Error! ${error}` });
    }
  }

  async update(req: IRequest, res: IResponse) {
    try {
      const { id } = req.params;
      const data: FeedstockToUpdateDto = new FeedstockToUpdateDto(req.body);

      const feedstockUpdated: FeedstockCreatedDto =
        await feedstockRepository.updateById(id, data);

      return res.status(201).json(feedstockUpdated);
    } catch (error) {
      return res.status(401).json({ error_msg: `Error! ${error}` });
    }
  }
}

export default new FeedstockController();
