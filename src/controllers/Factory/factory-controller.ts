import { Document } from 'mongoose';

import { IRequest, IResponse } from '../../@types/index';
import { FactoryCreateDto } from './dto/factory-create-dto';
import { IFactory } from './factory-interface';
import FactoryRepository from './factory-repository';

class FactoryController {
  async store(req: IRequest, res: IResponse) {
    try {
      const factoryCreateDto: FactoryCreateDto = new FactoryCreateDto(req.body);
      const factoryCreated: Document<IFactory> = await FactoryRepository.create(
        factoryCreateDto,
      );

      return res
        .status(201)
        .json({ success_msg: `Success! Your object is ${factoryCreated}` });
    } catch (error) {
      return res.status(401).json({ error_msg: `Error! ${error}` });
    }
  }
}

export default new FactoryController();
