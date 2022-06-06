import { Document } from 'mongoose';
import { IRequest, IResponse } from '../../@types';

import { AdCreateDto } from './dto/ad-create.dto';
import { IAd } from './ad.interface';
import AdRepository from './ad.repository';

class AdController {
  async store(req: IRequest, res: IResponse) {
    try {
      const adCreateDto: AdCreateDto = new AdCreateDto(req.body);

      const adCreated: Document<IAd> = await AdRepository.create(adCreateDto);

      return res.status(201).json(adCreated);
    } catch (error) {
      return res.status(401).json({ error_msg: `Error! ${error}` });
    }
  }

  async index(req: IRequest, res: IResponse) {
    try {
      const { id } = req.params;

      const ad: Document<IAd> = await AdRepository.getOneById(id);

      return res.status(201).json(ad);
    } catch (error) {
      return res.status(401).json({ error_msg: `Error! ${error}` });
    }
  }

  async show(req: IRequest, res: IResponse) {
    try {
      const ad: Array<Document<IAd>> = await AdRepository.listAll();

      return res.status(201).json(ad);
    } catch (error) {
      return res.status(401).json({ error_msg: `Error! ${error}` });
    }
  }

  async delete(req: IRequest, res: IResponse) {
    try {
      const { id } = req.params;

      await AdRepository.deleteById(id);

      return res
        .status(201)
        .json({ success_msg: `Success! Your ad was deleted` });
    } catch (error) {
      return res.status(401).json({ error_msg: `Error! ${error}` });
    }
  }

  async update(req: IRequest, res: IResponse) {
    try {
      const { id } = req.params;
      const data = req.body;

      const adUpdated = await AdRepository.updateById(id, data);

      return res.status(201).json(adUpdated);
    } catch (error) {
      return res.status(401).json({ error_msg: `Error! ${error}` });
    }
  }
}

export default new AdController();
