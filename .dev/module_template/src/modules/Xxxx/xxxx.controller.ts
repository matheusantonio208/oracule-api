import { Document } from 'mongoose';
import { IRequest, IResponse } from '../../@types';

import { XxxxDto, XxxxCreateDto } from './dto/index.dto';

import XxxxRepository from './xxxx.repository';

class XxxxController {
  async store(req: IRequest, res: IResponse) {
    try {
      const xxxxCreateDto: XxxxCreateDto = new XxxxCreateDto(req.body);

      const xxxxCreated: Document<XxxxDto> = await XxxxRepository.create(
        xxxxCreateDto,
      );

      return res.status(201).json(xxxxCreated);
    } catch (error) {
      return res.status(401).json({ error_msg: `Error! ${error}` });
    }
  }

  async index(req: IRequest, res: IResponse) {
    try {
      const { id } = req.params;

      const xxxx: Document<XxxxDto> = await XxxxRepository.getOneById(id);

      return res.status(201).json(xxxx);
    } catch (error) {
      return res.status(401).json({ error_msg: `Error! ${error}` });
    }
  }

  async show(req: IRequest, res: IResponse) {
    try {
      const xxxx: Array<Document<XxxxDto>> = await XxxxRepository.listAll();

      return res.status(201).json(xxxx);
    } catch (error) {
      return res.status(401).json({ error_msg: `Error! ${error}` });
    }
  }

  async delete(req: IRequest, res: IResponse) {
    try {
      const { id } = req.params;

      await XxxxRepository.deleteById(id);

      return res
        .status(201)
        .json({ success_msg: `Success! Your xxxx was deleted` });
    } catch (error) {
      return res.status(401).json({ error_msg: `Error! ${error}` });
    }
  }

  async update(req: IRequest, res: IResponse) {
    try {
      const { id } = req.params;
      const data = req.body;

      const xxxxUpdated = await XxxxRepository.updateById(id, data);

      return res.status(201).json(xxxxUpdated);
    } catch (error) {
      return res.status(401).json({ error_msg: `Error! ${error}` });
    }
  }
}

export default new XxxxController();
