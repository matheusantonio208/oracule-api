import { IRequest, IResponse } from '../../@types';

import {
  CategoryToCreateDto,
  CategoryCreatingDto,
  CategoryCreatedDto,
  CategoryToUpdateDto,
} from './dto/index.dto';

import CategoryRepository from './category.repository';

class CategoryController {
  async store(req: IRequest, res: IResponse) {
    try {
      const categoryCreateDto: CategoryToCreateDto = new CategoryCreateDto(
        req.body,
      );

      const categoryCreated: CategoryCreatedDto =
        await CategoryRepository.create(categoryCreateDto);

      return res.status(201).json(categoryCreated);
    } catch (error) {
      return res.status(401).json({ error_msg: `Error! ${error}` });
    }
  }

  async index(req: IRequest, res: IResponse) {
    try {
      const { id } = req.params;

      const category: CategoryCreatedDto = await CategoryRepository.getOneById(
        id,
      );
      return res.status(201).json(category);
    } catch (error) {
      return res.status(401).json({ error_msg: `Error! ${error}` });
    }
  }
  async show(req: IRequest, res: IResponse) {
    try {
      const categories = await CategoryRepository.listAll();
      return res.status(201).json(categories);
    } catch (error) {
      return res.status(401).json({ error_msg: `Error! ${error}` });
    }
  }
  async delete(req: IRequest, res: IResponse) {
    try {
      const { id } = req.params;
      await CategoryRepository.deleteById(id);
      return res
        .status(201)
        .json({ success_msg: `Success! Your category was deleted` });
    } catch (error) {
      return res.status(401).json({ error_msg: `Error! ${error}` });
    }
  }
  async update(req: IRequest, res: IResponse) {
    try {
      const { id } = req.params;
      const data = req.body;
      const categoryUpdated = await CategoryRepository.updateById(id, data);
      return res.status(201).json(categoryUpdated);
    } catch (error) {
      return res.status(401).json({ error_msg: `Error! ${error}` });
    }
  }
}

export default new CategoryController();
