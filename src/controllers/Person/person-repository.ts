import { Document } from 'mongoose';

import Person from '../../schemas/Person';

import { PersonCreateDto } from './dto/person-create-dto';
import { IPerson } from './person-interface';

class PersonRepository {
  async create(person: PersonCreateDto): Promise<Document<IPerson>> {
    const providerCreate = new Person(Person);

    if (await providerCreate.save()) {
      return providerCreate;
    }

    throw new Error(`Error to create ${Person.name}`);
  }
}

export default new PersonRepository();
