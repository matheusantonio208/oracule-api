import { IRequest, IResponse } from '../../@types';

import {
  EanToCreateDto,
  EanCreatingDto,
  EanCreatedDto,
  EanToUpdateDto,
} from './dto/index.dto';

import EanRepository from './ean.repository';

import EanService from './ean.service';

class EanController {
  async store(req: IRequest, res: IResponse) {
    try {
      // === Get Vars === //
      const ean: EanToCreateDto = new EanToCreateDto(req.body);

      // === Generate Vars === //
      const eanProperty: number = await EanService.serviceFunction();

      // === Create Dto === //
      const eanCreatingDto: EanCreatingDto = new EanCreatingDto({
        ...ean,
        //code: eanCode
      });

      // === Create Object === //
      const eanCreated: EanCreatedDto = await EanRepository.create(
        eanCreatingDto,
      );

      return res.status(201).json(eanCreated);
    } catch (error) {
      return res.status(401).json({ error_msg: `Error! ${error}` });
    }
  }

  async index(req: IRequest, res: IResponse) {
    try {
      const { id } = req.params;

      const ean: EanCreatedDto = await EanRepository.getOneById(id);

      return res.status(201).json(ean);
    } catch (error) {
      return res.status(401).json({ error_msg: `Error! ${error}` });
    }
  }

  async show(req: IRequest, res: IResponse) {
    try {
      const ean: Array<EanCreatedDto> = await EanRepository.listAll();

      return res.status(201).json(ean);
    } catch (error) {
      return res.status(401).json({ error_msg: `Error! ${error}` });
    }
  }

  async delete(req: IRequest, res: IResponse) {
    try {
      const { id } = req.params;

      await EanRepository.deleteById(id);

      return res
        .status(201)
        .json({ success_msg: `Success! Your ean was deleted` });
    } catch (error) {
      return res.status(401).json({ error_msg: `Error! ${error}` });
    }
  }

  async update(req: IRequest, res: IResponse) {
    try {
      const { id } = req.params;
      const data: EanToUpdateDto = new EanToUpdateDto(req.body);

      const eanUpdated: EanCreatedDto = await EanRepository.updateById(
        id,
        data,
      );

      return res.status(201).json(eanUpdated);
    } catch (error) {
      return res.status(401).json({ error_msg: `Error! ${error}` });
    }
  }
}

export default new EanController();
