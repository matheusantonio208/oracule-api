import { IRequest, IResponse } from '../../@types';

import {
  SuppliesToCreateDto,
  SuppliesCreatingDto,
  SuppliesCreatedDto,
  SuppliesToUpdateDto,
} from './dto/index.dto';

import suppliesRepository from './supplies.repository';

import suppliesService from './supplies.service';

class SuppliesController {
  async store(req: IRequest, res: IResponse) {
    try {
      // === Get Vars === //
      const supplies: SuppliesToCreateDto = new SuppliesToCreateDto(req.body);

      // === Generate Vars === //
      const suppliesProperty: number = await suppliesService.serviceFunction();

      // === Create Dto === //
      const suppliesCreatingDto: SuppliesCreatingDto = new SuppliesCreatingDto({
        ...supplies,
        //code: suppliesCode
      });

      // === Create Object === //
      const suppliesCreated: SuppliesCreatedDto =
        await suppliesRepository.create(suppliesCreatingDto);

      return res.status(201).json(suppliesCreated);
    } catch (error) {
      return res.status(401).json({ error_msg: `Error! ${error}` });
    }
  }

  async index(req: IRequest, res: IResponse) {
    try {
      const { id } = req.params;

      const supplies: SuppliesCreatedDto = await suppliesRepository.getOneById(
        id,
      );

      return res.status(201).json(supplies);
    } catch (error) {
      return res.status(401).json({ error_msg: `Error! ${error}` });
    }
  }

  async show(req: IRequest, res: IResponse) {
    try {
      const { property, sort, itensPerPage, pagination } = req.query;

      const supplies: Array<SuppliesCreatedDto> =
        await suppliesRepository.listAll(
          property,
          sort,
          itensPerPage,
          pagination,
        );

      return res.status(201).json(supplies);
    } catch (error) {
      return res.status(401).json({ error_msg: `Error! ${error}` });
    }
  }

  async delete(req: IRequest, res: IResponse) {
    try {
      const { id } = req.params;

      await suppliesRepository.deleteById(id);

      return res
        .status(201)
        .json({ success_msg: `Success! Your supplies was deleted` });
    } catch (error) {
      return res.status(401).json({ error_msg: `Error! ${error}` });
    }
  }

  async update(req: IRequest, res: IResponse) {
    try {
      const { id } = req.params;
      const data: SuppliesToUpdateDto = new SuppliesToUpdateDto(req.body);

      const suppliesUpdated: SuppliesCreatedDto =
        await suppliesRepository.updateById(id, data);

      return res.status(201).json(suppliesUpdated);
    } catch (error) {
      return res.status(401).json({ error_msg: `Error! ${error}` });
    }
  }
}

export default new SuppliesController();
