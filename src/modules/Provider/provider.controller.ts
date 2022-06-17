import { IRequest, IResponse } from '../../@types';
import {
  ProviderToCreateDto,
  ProviderCreatingDto,
  ProviderCreatedDto,
  ProviderToUpdateDto,
} from './dto/index.dto';
import providerRepository from './provider.repository';

// import providerService from './provider.service';

class ProviderController {
  async store(req: IRequest, res: IResponse) {
    try {
      // === Get Vars === //
      const provider: ProviderToCreateDto = new ProviderToCreateDto(req.body);

      // === Generate Vars === //
      // const providerProperty: number = await providerService.serviceFunction();

      // === Create Dto === //
      const providerCreatingDto: ProviderCreatingDto = new ProviderCreatingDto({
        ...provider,
        // code: providerCode
      });

      // === Create Object === //
      const providerCreated: ProviderCreatedDto =
        await providerRepository.create(providerCreatingDto);

      return res.status(201).json(providerCreated);
    } catch (error) {
      return res.status(401).json({ error_msg: `Error! ${error}` });
    }
  }

  async index(req: IRequest, res: IResponse) {
    try {
      const { id } = req.params;

      const provider: ProviderCreatedDto = await providerRepository.getOneById(
        id,
      );

      return res.status(201).json(provider);
    } catch (error) {
      return res.status(401).json({ error_msg: `Error! ${error}` });
    }
  }

  async show(req: IRequest, res: IResponse) {
    try {
      const { property, sort, itensPerPage, pagination } = req.query;

      const provider: Array<ProviderCreatedDto> =
        await providerRepository.listAll(
          property,
          sort,
          itensPerPage,
          pagination,
        );

      return res.status(201).json(provider);
    } catch (error) {
      return res.status(401).json({ error_msg: `Error! ${error}` });
    }
  }

  async delete(req: IRequest, res: IResponse) {
    try {
      const { id } = req.params;

      await providerRepository.deleteById(id);

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
      const data: ProviderToUpdateDto = new ProviderToUpdateDto(req.body);

      const providerUpdated: ProviderCreatedDto =
        await providerRepository.updateById(id, data);

      return res.status(201).json(providerUpdated);
    } catch (error) {
      return res.status(401).json({ error_msg: `Error! ${error}` });
    }
  }
}

export default new ProviderController();
