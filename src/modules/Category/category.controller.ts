import { IRequest, IResponse } from '@types';
import { exportToCsv } from 'utils/json-to-csv';
import categoryRepository from './category.repository';
import {
  CategoryToCreateDto,
  CategoryCreatingDto,
  CategoryCreatedDto,
  CategoryToUpdateDto,
} from './dto/index.dto';

// import categoryService from './category.service';

class CategoryController {
  async store(req: IRequest, res: IResponse) {
    try {
      // === Get Vars === //
      const category: CategoryToCreateDto = new CategoryToCreateDto(req.body);

      // === Generate Vars === //
      // const categoryProperty: number = await categoryService.serviceFunction();

      // === Create Dto === //
      const categoryCreatingDto: CategoryCreatingDto = new CategoryCreatingDto({
        ...category,
        // category_property: categoryProperty,
      });

      // === Create Object === //
      const categoryCreated: CategoryCreatedDto =
        await categoryRepository.create(categoryCreatingDto);

      return res.status(201).json(categoryCreated);
    } catch (error) {
      return res.status(401).json({ error_msg: `Error! ${error}` });
    }
  }

  async index(req: IRequest, res: IResponse) {
    try {
      const { id } = req.params;

      const category: CategoryCreatedDto = await categoryRepository.getOneById(
        id,
      );

      return res.status(201).json(category);
    } catch (error) {
      return res.status(401).json({ error_msg: `Error! ${error}` });
    }
  }

  async show(req: IRequest, res: IResponse) {
    try {
      const { property, sort, itensPerPage, pagination } = req.query;

      const category: Array<CategoryCreatedDto> =
        await categoryRepository.listAll(
          property,
          sort,
          itensPerPage,
          pagination,
        );

      return res.status(201).json(category);
    } catch (error) {
      return res.status(401).json({ error_msg: `Error! ${error}` });
    }
  }

  async delete(req: IRequest, res: IResponse) {
    try {
      const { id } = req.params;

      await categoryRepository.deleteById(id);

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
      const data: CategoryToUpdateDto = new CategoryToUpdateDto(req.body);

      const categoryUpdated: CategoryCreatedDto =
        await categoryRepository.updateById(id, data);

      return res.status(201).json(categoryUpdated);
    } catch (error) {
      return res.status(401).json({ error_msg: `Error! ${error}` });
    }
  }
}

export default new CategoryController();
