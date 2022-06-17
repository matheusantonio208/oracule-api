import { Schema } from 'mongoose';
import Category from '../../schemas/Category';

import {
  CategoryCreatingDto,
  CategoryCreatedDto,
  CategoryToUpdateDto,
} from './dto/index.dto';

class CategoryRepository {
  async create(category: CategoryCreatingDto): Promise<CategoryCreatedDto> {
    const categoryCreate = new Category(category);

    if (await categoryCreate.save()) {
      return categoryCreate;
    }

    throw new Error(`Error to create category`);
  }

  async getOneById(id: Schema.Types.ObjectId): Promise<CategoryCreatedDto> {
    const category: CategoryCreatedDto = await Category.findById(id);
    if (category) return category;

    throw new Error(`Error to get category`);
  }

  async listAll(
    property: string,
    sort: string,
    itensPerPage: number,
    pagination: number,
  ): Promise<Array<CategoryCreatedDto>> {
    const categorys: Array<CategoryCreatedDto> = await Category.find(
      {},
      (err, docs) => {
        if (!err) return docs;
      },
    )
      .sort([[property, sort]])
      .skip(pagination)
      .limit(itensPerPage)
      .exec();

    if (categorys) return categorys;

    throw new Error(`Error to list categories`);
  }

  async updateById(
    id: Schema.Types.ObjectId,
    data: CategoryToUpdateDto,
  ): Promise<CategoryCreatedDto> {
    const updatedCategory: CategoryCreatedDto =
      await Category.findByIdAndUpdate(id, data, (error, document) => {
        if (!error) return document;
      });

    if (updatedCategory) return updatedCategory;

    throw new Error(`Error to update category`);
  }

  async deleteById(id: Schema.Types.ObjectId): Promise<Boolean> {
    if (await Category.deleteOne({ _id: id })) return true;

    throw new Error(`Error to delete category`);
  }
}

export default new CategoryRepository();
