import { Document } from 'mongoose';
import { IRequest, IResponse } from '../../@types';

import { FeedstockCreateDto } from './dto/feedstock-create.dto';
import { IFeedstock } from './feedstock.interface';
import FeedstockRepository from './feedstock.repository';

class FeedstockController {
  async store(req: IRequest, res: IResponse) {
    try {
      const feedstockCreateDto: FeedstockCreateDto = new FeedstockCreateDto(
        req.body,
      );

      const feedstockCreated: Document<IFeedstock> =
        await FeedstockRepository.create(feedstockCreateDto);

      return res.status(201).json(feedstockCreated);
    } catch (error) {
      return res.status(401).json({ error_msg: `Error! ${error}` });
    }
  }

  async index(req: IRequest, res: IResponse) {
    try {
      const { id } = req.params;

      const feedstock: Document<IFeedstock> =
        await FeedstockRepository.getOneById(id);

      return res.status(201).json(feedstock);
    } catch (error) {
      return res.status(401).json({ error_msg: `Error! ${error}` });
    }
  }

  async show(req: IRequest, res: IResponse) {
    try {
      const feedstock: Array<Document<IFeedstock>> =
        await FeedstockRepository.listAll();

      return res.status(201).json(feedstock);
    } catch (error) {
      return res.status(401).json({ error_msg: `Error! ${error}` });
    }
  }

  async delete(req: IRequest, res: IResponse) {
    try {
      const { id } = req.params;

      await FeedstockRepository.deleteById(id);

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
      const data = req.body;

      const feedstockUpdated = await FeedstockRepository.updateById(id, data);

      return res.status(201).json(feedstockUpdated);
    } catch (error) {
      return res.status(401).json({ error_msg: `Error! ${error}` });
    }
  }
}

export default new FeedstockController();
