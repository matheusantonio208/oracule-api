import { Document } from 'mongoose';
import { IRequest, IResponse } from '../../@types';

import SuppliesRepository from './supplies.repository';
import {
  SuppliesToCreateDto,
  SuppliesCreatingDto,
  SuppliesCreatedDto,
  SuppliesToUpdateDto,
} from './dto/index.dto';

class SuppliesController {
  async store(req: IRequest, res: IResponse) {
    try {
      const suppliesCreateDto: SuppliesCreateDto = new SuppliesCreateDto(
        req.body,
      );

      const suppliesCreated: Document<ISupplies> =
        await SuppliesRepository.create(suppliesCreateDto);

      return res.status(201).json(suppliesCreated);
    } catch (error) {
      return res.status(401).json({ error_msg: `Error! ${error}` });
    }
  }

  async index(req: IRequest, res: IResponse) {
    try {
      const { id } = req.params;

      const supplies: Document<ISupplies> = await SuppliesRepository.getOneById(
        id,
      );

      return res.status(201).json(supplies);
    } catch (error) {
      return res.status(401).json({ error_msg: `Error! ${error}` });
    }
  }

  async show(req: IRequest, res: IResponse) {
    try {
      const supplies: Array<Document<ISupplies>> =
        await SuppliesRepository.listAll();

      return res.status(201).json(supplies);
    } catch (error) {
      return res.status(401).json({ error_msg: `Error! ${error}` });
    }
  }

  async delete(req: IRequest, res: IResponse) {
    try {
      const { id } = req.params;

      await SuppliesRepository.deleteById(id);

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
      const data = req.body;

      const suppliesUpdated = await SuppliesRepository.updateById(id, data);

      return res.status(201).json(suppliesUpdated);
    } catch (error) {
      return res.status(401).json({ error_msg: `Error! ${error}` });
    }
  }
}

export default new SuppliesController();
