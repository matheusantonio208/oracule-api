import { Document } from 'mongoose';
import { IRequest, IResponse } from '../../@types';

import { XxxxCreateDto } from './dto/xxxx-create.dto';
import { IXxxx } from './xxxx.interface';
import XxxxRepository from './xxxx.repository';

class XxxxController {
  async store(req: IRequest, res: IResponse) {
    try {
      const xxxxCreateDto: XxxxCreateDto = new XxxxCreateDto(req.body);

      const xxxxCreated: Document<IXxxx> = await XxxxRepository.create(
        xxxxCreateDto,
      );

      return res
        .status(201)
        .json({ success_msg: `Success! Your object is ${xxxxCreated}` });
    } catch (error) {
      return res.status(401).json({ error_msg: `Error! ${error}` });
    }
  }

  async index(req: IRequest, res: IResponse) {
    try {
    } catch (error) {
      return res.status(401).json({ error_msg: `Error! ${error}` });
    }
  }
  async show(req: IRequest, res: IResponse) {
    try {
    } catch (error) {
      return res.status(401).json({ error_msg: `Error! ${error}` });
    }
  }
  async delete(req: IRequest, res: IResponse) {
    try {
    } catch (error) {
      return res.status(401).json({ error_msg: `Error! ${error}` });
    }
  }
  async update(req: IRequest, res: IResponse) {
    try {
    } catch (error) {
      return res.status(401).json({ error_msg: `Error! ${error}` });
    }
  }
}

export default new XxxxController();
