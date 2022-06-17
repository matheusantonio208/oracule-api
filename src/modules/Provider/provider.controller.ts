import { Document } from 'mongoose';
import { IRequest, IResponse } from '../../@types';
import {
  ProviderToCreateDto,
  ProviderCreatingDto,
  ProviderCreatedDto,
  ProviderToUpdateDto,
} from './dto/index.dto';
import ProviderRepository from './provider.repository';

class ProviderController {
  async store(req: IRequest, res: IResponse) {
    try {
      const providerCreateDto: ProviderCreateDto = new ProviderCreateDto(
        req.body,
      );

      const providerCreated: Document<IProvider> =
        await ProviderRepository.create(providerCreateDto);

      return res.status(201).json(providerCreated);
    } catch (error) {
      return res.status(401).json({ error_msg: `Error! ${error}` });
    }
  }

  async index(req: IRequest, res: IResponse) {
    try {
      const { id } = req.params;

      const provider: Document<IProvider> = await ProviderRepository.getOneById(
        id,
      );

      return res.status(201).json(provider);
    } catch (error) {
      return res.status(401).json({ error_msg: `Error! ${error}` });
    }
  }

  async show(req: IRequest, res: IResponse) {
    try {
      const provider: Array<Document<IProvider>> =
        await ProviderRepository.listAll();

      return res.status(201).json(provider);
    } catch (error) {
      return res.status(401).json({ error_msg: `Error! ${error}` });
    }
  }

  async delete(req: IRequest, res: IResponse) {
    try {
      const { id } = req.params;

      await ProviderRepository.deleteById(id);

      return res
        .status(201)
        .json({ success_msg: `Success! Your provider was deleted` });
    } catch (error) {
      return res.status(401).json({ error_msg: `Error! ${error}` });
    }
  }

  async update(req: IRequest, res: IResponse) {
    try {
      const { id } = req.params;
      const data = req.body;

      const providerUpdated = await ProviderRepository.updateById(id, data);

      return res.status(201).json(providerUpdated);
    } catch (error) {
      return res.status(401).json({ error_msg: `Error! ${error}` });
    }
  }
}

export default new ProviderController();
