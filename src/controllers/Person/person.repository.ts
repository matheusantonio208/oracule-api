import { Document } from 'mongoose';

import Person from '../../schemas/Person';

import { PersonCreateDto } from './dto/person-create.dto';
import { IPerson } from './person.interface';

class PersonRepository {
  async create(person: PersonCreateDto): Promise<Document<IPerson>> {
    const personCreate = new Person(person);

    if (await personCreate.save()) {
      return personCreate;
    }

    throw new Error(`Error to create person`);
  }

  async getOneById(id: string): Promise<Document<IPerson>> {
    const person: Document<IPerson> = await Person.findById(id);
    if (person) return person;

    throw new Error(`Error to get person`);
  }

  async listAll(): Promise<Array<Document<IPerson>>> {
    const persons: Array<Document<IPerson>> = await Person.find(
      {},
      (err, docs) => {
        if (!err) return docs;
      },
    );

    if (persons) return persons;

    throw new Error(`Error to list categories`);
  }

  async updateById(id: string, data: any): Promise<Document<IPerson>> {
    const updatedPerson: Document<IPerson> = await Person.findByIdAndUpdate(
      id,
      data,
      (error, document) => {
        if (!error) return document;
      },
    );

    if (updatedPerson) return updatedPerson;

    throw new Error(`Error to update person`);
  }

  async deleteById(id: string): Promise<Boolean> {
    if (await Person.deleteOne({ _id: id })) return true;

    throw new Error(`Error to delete person`);
  }
}

export default new PersonRepository();
