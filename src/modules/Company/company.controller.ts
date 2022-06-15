import { IRequest, IResponse } from '../../@types';

import {
  CompanyToCreateDto,
  CompanyCreatingDto,
  CompanyCreatedDto,
  CompanyToUpdateDto,
} from './dto/index.dto';

import CompanyRepository from './company.repository';

import CompanyService from './company.service';

class CompanyController {
  async store(req: IRequest, res: IResponse) {
    try {
      // === Get Vars === //
      const company: CompanyToCreateDto = new CompanyToCreateDto(req.body);

      // === Generate Vars === //
      const companyProperty: number = await CompanyService.serviceFunction();

      // === Create Dto === //
      const companyCreatingDto: CompanyCreatingDto = new CompanyCreatingDto({
        ...company,
        //code: companyCode
      });

      // === Create Object === //
      const companyCreated: CompanyCreatedDto = await CompanyRepository.create(
        companyCreatingDto,
      );

      return res.status(201).json(companyCreated);
    } catch (error) {
      return res.status(401).json({ error_msg: `Error! ${error}` });
    }
  }

  async index(req: IRequest, res: IResponse) {
    try {
      const { id } = req.params;

      const company: CompanyCreatedDto = await CompanyRepository.getOneById(id);

      return res.status(201).json(company);
    } catch (error) {
      return res.status(401).json({ error_msg: `Error! ${error}` });
    }
  }

  async show(req: IRequest, res: IResponse) {
    try {
      const company: Array<CompanyCreatedDto> =
        await CompanyRepository.listAll();

      return res.status(201).json(company);
    } catch (error) {
      return res.status(401).json({ error_msg: `Error! ${error}` });
    }
  }

  async delete(req: IRequest, res: IResponse) {
    try {
      const { id } = req.params;

      await CompanyRepository.deleteById(id);

      return res
        .status(201)
        .json({ success_msg: `Success! Your company was deleted` });
    } catch (error) {
      return res.status(401).json({ error_msg: `Error! ${error}` });
    }
  }

  async update(req: IRequest, res: IResponse) {
    try {
      const { id } = req.params;
      const data: CompanyToUpdateDto = new CompanyToUpdateDto(req.body);

      const companyUpdated: CompanyCreatedDto =
        await CompanyRepository.updateById(id, data);

      return res.status(201).json(companyUpdated);
    } catch (error) {
      return res.status(401).json({ error_msg: `Error! ${error}` });
    }
  }
}

export default new CompanyController();
