import { Document } from 'mongoose';
import { IRequest, IResponse } from '../../@types';

import { AdCreateDto } from './dto/ad-create-dto';
import { IAd } from './ad-interface';
import AdRepository from './ad-repository';

class AdController {
  async store(req: IRequest, res: IResponse) {
    try {
      const adCreateDto: AdCreateDto = new AdCreateDto(req.body);
      const adCreated: Document<IAd> = await AdRepository.create(adCreateDto);

      return res
        .status(201)
        .json({ success_msg: `Success! Your object is ${adCreated}` });
    } catch (error) {
      return res.status(401).json({ error_msg: `Error! ${error}` });
    }
  }
}

export default new AdController();
