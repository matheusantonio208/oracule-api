import { Document } from 'mongoose';

import Feedstock from '../../schemas/Feedstock';

import { FeedstockCreateDto } from './dto/feedstock-create.dto';
import { IFeedstock } from './feedstock.interface';

class FeedstockRepository {
  async create(feedstock: FeedstockCreateDto): Promise<Document<IFeedstock>> {
    const feedstockCreate = new Feedstock(feedstock);

    if (await feedstockCreate.save()) {
      return feedstockCreate;
    }

    throw new Error(`Error to create ${feedstock.name}`);
  }
}

export default new FeedstockRepository();
