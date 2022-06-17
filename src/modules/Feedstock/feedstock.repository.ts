import { Document } from 'mongoose';

import Feedstock from '../../schemas/Feedstock';

import {
  FeedstockToCreateDto,
  FeedstockCreatingDto,
  FeedstockCreatedDto,
  FeedstockToUpdateDto,
} from './dto/index.dto';

class FeedstockRepository {
  async create(feedstock: FeedstockCreateDto): Promise<Document<IFeedstock>> {
    const feedstockCreate = new Feedstock(feedstock);

    if (await feedstockCreate.save()) {
      return feedstockCreate;
    }

    throw new Error(`Error to create feedstock`);
  }

  async getOneById(id: Schema.Types.ObjectId;): Promise<IFeedstock> {
    const feedstock = await Feedstock.findById(id);
    if (feedstock) return feedstock as IFeedstock;

    throw new Error(`Error to get feedstock`);
  }

  async listAll(): Promise<Array<Document<IFeedstock>>> {
    const feedstocks: Array<Document<IFeedstock>> = await Feedstock.find(
      {},
      (err, docs) => {
        if (!err) return docs;
      },
    );

    if (feedstocks) return feedstocks;

    throw new Error(`Error to list categories`);
  }

  async updateById(id: Schema.Types.ObjectId;, data: any): Promise<Document<IFeedstock>> {
    const updatedFeedstock: Document<IFeedstock> =
      await Feedstock.findByIdAndUpdate(id, data, (error, document) => {
        if (!error) return document;
      });

    if (updatedFeedstock) return updatedFeedstock;

    throw new Error(`Error to update feedstock`);
  }

  async deleteById(id: Schema.Types.ObjectId;): Promise<Boolean> {
    if (await Feedstock.deleteOne({ _id: id })) return true;

    throw new Error(`Error to delete feedstock`);
  }
}

export default new FeedstockRepository();
