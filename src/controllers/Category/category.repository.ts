import { Document } from 'mongoose';

import Category from '../../schemas/Category';

import { CategoryCreateDto } from './dto/category.create.dto';
import { ICategory } from './category.interface';

class CategoryRepository {
  async create(category: CategoryCreateDto): Promise<Document<ICategory>> {
    const categoryCreate = new Category(category);

    if (await categoryCreate.save()) {
      return categoryCreate;
    }

    throw new Error(`Error to create category`);
  }

  async getOneById(id: string): Promise<Document<ICategory>> {
    const category = await Category.findById(id);
    if (category) return category;

    throw new Error(`Error to get category`);
  }

  async listAll(): Promise<Array<Document<ICategory>>> {
    const categories = await Category.find({}, (err, docs) => {
      if (!err) return docs;
    });

    if (categories) return categories;

    throw new Error(`Error to list categories`);
  }

  async updateById(id: string, data: any): Promise<Document<ICategory>> {
    const updatedCategory = await Category.findByIdAndUpdate(
      id,
      data,
      (error, document) => {
        if (!error) return document;
      },
    );

    if (updatedCategory) return updatedCategory;

    throw new Error(`Error to update category`);
  }

  async deleteById(id: string): Promise<Boolean> {
    if (await Category.deleteOne({ _id: id })) return true;

    throw new Error(`Error to delete category`);
  }
}

export default new CategoryRepository();
