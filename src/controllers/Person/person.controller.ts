import { Document } from 'mongoose';
import { IRequest, IResponse } from '../../@types';

import { PersonCreateDto } from './dto/person-create.dto';
import { IPerson } from './person.interface';
import PersonRepository from './person.repository';

class PersonController {
  async store(req: IRequest, res: IResponse) {
    try {
      const providerCreateDto: PersonCreateDto = new PersonCreateDto(req.body);
      const providerCreated: Document<IPerson> = await PersonRepository.create(
        providerCreateDto,
      );

      return res
        .status(201)
        .json({ success_msg: `Success! Your object is ${providerCreated}` });
    } catch (error) {
      return res.status(401).json({ error_msg: `Error! ${error}` });
    }
  }
}

export default new PersonController();
