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

      return res
        .status(201)
        .json({ success_msg: `Success! Your object is ${feedstockCreated}` });
    } catch (error) {
      return res.status(401).json({ error_msg: `Error! ${error}` });
    }
  }
}

export default new FeedstockController();
