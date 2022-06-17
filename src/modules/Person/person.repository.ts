import { Document } from 'mongoose';
import {
  PersonToCreateDto,
  PersonCreatingDto,
  PersonCreatedDto,
  PersonToUpdateDto,
} from './dto/index.dto';
import Person from '../../schemas/Person';

class PersonRepository {
  async create(person: PersonCreateDto): Promise<Document<IPerson>> {
    const personCreate = new Person(person);

    if (await personCreate.save()) {
      return personCreate;
    }

    throw new Error(`Error to create person`);
  }

  async getOneById(id: Schema.Types.ObjectId;): Promise<Document<IPerson>> {
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

  async updateById(id: Schema.Types.ObjectId;, data: any): Promise<Document<IPerson>> {
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

  async deleteById(id: Schema.Types.ObjectId;): Promise<Boolean> {
    if (await Person.deleteOne({ _id: id })) return true;

    throw new Error(`Error to delete person`);
  }
}

export default new PersonRepository();
