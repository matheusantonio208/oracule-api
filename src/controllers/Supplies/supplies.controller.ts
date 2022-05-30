import { Document } from 'mongoose';
import { IRequest, IResponse } from '../../@types';

import { SuppliesCreateDto } from './dto/supplies-create.dto';
import { ISupplies } from './supplies.interface';
import SuppliesRepository from './supplies.repository';

class SuppliesController {
  async store(req: IRequest, res: IResponse) {
    try {
      const suppliesCreateDto: SuppliesCreateDto = new SuppliesCreateDto(
        req.body,
      );
      const suppliesCreated: Document<ISupplies> =
        await SuppliesRepository.create(suppliesCreateDto);

      return res
        .status(201)
        .json({ success_msg: `Success! Your object is ${suppliesCreated}` });
    } catch (error) {
      return res.status(401).json({ error_msg: `Error! ${error}` });
    }
  }
}

export default new SuppliesController();
