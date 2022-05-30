import { Document } from 'mongoose';
import { IRequest, IResponse } from '../../@types';

import { ProviderCreateDto } from './dto/provider-create.dto';
import { IProvider } from './provider.interface';
import ProviderRepository from './provider.repository';

class ProviderController {
  async store(req: IRequest, res: IResponse) {
    try {
      const providerCreateDto: ProviderCreateDto = new ProviderCreateDto(
        req.body,
      );
      const providerCreated: Document<IProvider> =
        await ProviderRepository.create(providerCreateDto);

      return res
        .status(201)
        .json({ success_msg: `Success! Your object is ${providerCreated}` });
    } catch (error) {
      return res.status(401).json({ error_msg: `Error! ${error}` });
    }
  }
}

export default new ProviderController();
