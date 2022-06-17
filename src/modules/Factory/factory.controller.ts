import { IRequest, IResponse } from '../../@types';

import {
  FactoryToCreateDto,
  FactoryCreatingDto,
  FactoryCreatedDto,
  FactoryToUpdateDto,
} from './dto/index.dto';

import factoryRepository from './factory.repository';

import factoryService from './factory.service';

class FactoryController {
  async store(req: IRequest, res: IResponse) {
    try {
      // === Get Vars === //
      const factory: FactoryToCreateDto = new FactoryToCreateDto(req.body);

      // === Generate Vars === //
      const factoryProperty: number = await factoryService.serviceFunction();

      // === Create Dto === //
      const factoryCreatingDto: FactoryCreatingDto = new FactoryCreatingDto({
        ...factory,
        //code: factoryCode
      });

      // === Create Object === //
      const factoryCreated: FactoryCreatedDto = await factoryRepository.create(
        factoryCreatingDto,
      );

      return res.status(201).json(factoryCreated);
    } catch (error) {
      return res.status(401).json({ error_msg: `Error! ${error}` });
    }
  }

  async index(req: IRequest, res: IResponse) {
    try {
      const { id } = req.params;

      const factory: FactoryCreatedDto = await factoryRepository.getOneById(id);

      return res.status(201).json(factory);
    } catch (error) {
      return res.status(401).json({ error_msg: `Error! ${error}` });
    }
  }

  async show(req: IRequest, res: IResponse) {
    try {
      const { property, sort, itensPerPage, pagination } = req.query;

      const factory: Array<FactoryCreatedDto> = await factoryRepository.listAll(
        property,
        sort,
        itensPerPage,
        pagination,
      );

      return res.status(201).json(factory);
    } catch (error) {
      return res.status(401).json({ error_msg: `Error! ${error}` });
    }
  }

  async delete(req: IRequest, res: IResponse) {
    try {
      const { id } = req.params;

      await factoryRepository.deleteById(id);

      return res
        .status(201)
        .json({ success_msg: `Success! Your factory was deleted` });
    } catch (error) {
      return res.status(401).json({ error_msg: `Error! ${error}` });
    }
  }

  async update(req: IRequest, res: IResponse) {
    try {
      const { id } = req.params;
      const data: FactoryToUpdateDto = new FactoryToUpdateDto(req.body);

      const factoryUpdated: FactoryCreatedDto =
        await factoryRepository.updateById(id, data);

      return res.status(201).json(factoryUpdated);
    } catch (error) {
      return res.status(401).json({ error_msg: `Error! ${error}` });
    }
  }
}

export default new FactoryController();
