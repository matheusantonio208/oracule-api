import { Document, Schema } from 'mongoose';

import Feedstock from '../../schemas/Feedstock';
import {
  FeedstockCreatingDto,
  FeedstockCreatedDto,
  FeedstockToUpdateDto,
} from './dto/index.dto';

class FeedstockRepository {
  async create(feedstock: FeedstockCreatingDto): Promise<FeedstockCreatedDto> {
    const feedstockCreate = new Feedstock(feedstock);

    if (await feedstockCreate.save()) {
      return feedstockCreate;
    }

    throw new Error(`Error to create feedstock`);
  }

  async getOneById(id: Schema.Types.ObjectId): Promise<FeedstockCreatedDto> {
    const feedstock: FeedstockCreatedDto = await Feedstock.findById(id);
    if (feedstock) return feedstock;

    throw new Error(`Error to get ad`);
  }

  async listAll(
    property: string,
    sort: string,
    itensPerPage: number,
    pagination: number,
  ): Promise<Array<FeedstockCreatedDto>> {
    const feedstocks: Array<FeedstockCreatedDto> = await Feedstock.find(
      {},
      (error, docs) => {
        if (!error) return docs;
      },
    )
      .sort([[property, sort]])
      .skip(pagination)
      .limit(itensPerPage)
      .exec();

    if (feedstocks) return feedstocks;

    throw new Error(`Error to list categories`);
  }

  async updateById(
    id: Schema.Types.ObjectId,
    data: FeedstockToUpdateDto,
  ): Promise<FeedstockCreatedDto> {
    const updatedFeedstock: FeedstockCreatedDto =
      await Feedstock.findByIdAndUpdate(id, data, (error, document) => {
        if (!error) return document;
      });

    if (updatedFeedstock) return updatedFeedstock;

    throw new Error(`Error to update feedstock`);
  }

  async deleteById(id: Schema.Types.ObjectId): Promise<Boolean> {
    if (await Feedstock.deleteOne({ _id: id })) return true;

    throw new Error(`Error to delete feedstock`);
  }
}

export default new FeedstockRepository();
