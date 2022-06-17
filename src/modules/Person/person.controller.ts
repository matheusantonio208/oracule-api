import { IRequest, IResponse } from '../../@types';

import {
  PersonToCreateDto,
  PersonCreatingDto,
  PersonCreatedDto,
  PersonToUpdateDto,
} from './dto/index.dto';

import personRepository from './person.repository';

import personService from './person.service';

class PersonController {
  async store(req: IRequest, res: IResponse) {
    try {
      // === Get Vars === //
      const person: PersonToCreateDto = new PersonToCreateDto(req.body);

      // === Generate Vars === //
      const personProperty: number = await personService.serviceFunction();

      // === Create Dto === //
      const personCreatingDto: PersonCreatingDto = new PersonCreatingDto({
        ...person,
        //code: personCode
      });

      // === Create Object === //
      const personCreated: PersonCreatedDto = await personRepository.create(
        personCreatingDto,
      );

      return res.status(201).json(personCreated);
    } catch (error) {
      return res.status(401).json({ error_msg: `Error! ${error}` });
    }
  }

  async index(req: IRequest, res: IResponse) {
    try {
      const { id } = req.params;

      const person: PersonCreatedDto = await personRepository.getOneById(id);

      return res.status(201).json(person);
    } catch (error) {
      return res.status(401).json({ error_msg: `Error! ${error}` });
    }
  }

  async show(req: IRequest, res: IResponse) {
    try {
      const { property, sort, itensPerPage, pagination } = req.query;

      const person: Array<PersonCreatedDto> = await personRepository.listAll(
        property,
        sort,
        itensPerPage,
        pagination,
      );

      return res.status(201).json(person);
    } catch (error) {
      return res.status(401).json({ error_msg: `Error! ${error}` });
    }
  }

  async delete(req: IRequest, res: IResponse) {
    try {
      const { id } = req.params;

      await personRepository.deleteById(id);

      return res
        .status(201)
        .json({ success_msg: `Success! Your person was deleted` });
    } catch (error) {
      return res.status(401).json({ error_msg: `Error! ${error}` });
    }
  }

  async update(req: IRequest, res: IResponse) {
    try {
      const { id } = req.params;
      const data: PersonToUpdateDto = new PersonToUpdateDto(req.body);

      const personUpdated: PersonCreatedDto = await personRepository.updateById(
        id,
        data,
      );

      return res.status(201).json(personUpdated);
    } catch (error) {
      return res.status(401).json({ error_msg: `Error! ${error}` });
    }
  }
}

export default new PersonController();
