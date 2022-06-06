import { Document } from 'mongoose';
import { IRequest, IResponse } from '../../@types';

import { PersonCreateDto } from './dto/person-create.dto';
import { IPerson } from './person.interface';
import PersonRepository from './person.repository';

class PersonController {
  async store(req: IRequest, res: IResponse) {
    try {
      const personCreateDto: PersonCreateDto = new PersonCreateDto(req.body);

      const personCreated: Document<IPerson> = await PersonRepository.create(
        personCreateDto,
      );

      return res.status(201).json(personCreated);
    } catch (error) {
      return res.status(401).json({ error_msg: `Error! ${error}` });
    }
  }

  async index(req: IRequest, res: IResponse) {
    try {
      const { id } = req.params;

      const person: Document<IPerson> = await PersonRepository.getOneById(id);

      return res.status(201).json(person);
    } catch (error) {
      return res.status(401).json({ error_msg: `Error! ${error}` });
    }
  }

  async show(req: IRequest, res: IResponse) {
    try {
      const person: Array<Document<IPerson>> = await PersonRepository.listAll();

      return res.status(201).json(person);
    } catch (error) {
      return res.status(401).json({ error_msg: `Error! ${error}` });
    }
  }

  async delete(req: IRequest, res: IResponse) {
    try {
      const { id } = req.params;

      await PersonRepository.deleteById(id);

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
      const data = req.body;

      const personUpdated = await PersonRepository.updateById(id, data);

      return res.status(201).json(personUpdated);
    } catch (error) {
      return res.status(401).json({ error_msg: `Error! ${error}` });
    }
  }
}

export default new PersonController();
