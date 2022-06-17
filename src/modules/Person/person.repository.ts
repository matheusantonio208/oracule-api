import { Schema } from 'mongoose';

import Person from '../../schemas/Person';
import {
  PersonCreatingDto,
  PersonCreatedDto,
  PersonToUpdateDto,
} from './dto/index.dto';

class PersonRepository {
  async create(person: PersonCreatingDto): Promise<PersonCreatedDto> {
    const personCreate = new Person(person);

    if (await personCreate.save()) {
      return personCreate;
    }

    throw new Error(`Error to create person`);
  }

  async getOneById(id: Schema.Types.ObjectId): Promise<PersonCreatedDto> {
    const person: PersonCreatedDto = await Person.findById(id);
    if (person) return person;

    throw new Error(`Error to get person`);
  }

  async listAll(
    property: string,
    sort: string,
    itensPerPage: number,
    pagination: number,
  ): Promise<Array<PersonCreatedDto>> {
    const persons: Array<PersonCreatedDto> = await Person.find(
      {},
      (error, docs) => {
        if (!error) return docs;
        throw error;
      },
    )
      .sort([[property, sort]])
      .skip(pagination)
      .limit(itensPerPage)
      .exec();

    if (persons) return persons;

    throw new Error(`Error to list categories`);
  }

  async updateById(
    id: Schema.Types.ObjectId,
    data: PersonToUpdateDto,
  ): Promise<PersonCreatedDto> {
    const updatedPerson: PersonCreatedDto = await Person.findByIdAndUpdate(
      id,
      data,
      (error, document) => {
        if (!error) return document;
        throw error;
      },
    );

    if (updatedPerson) return updatedPerson;

    throw new Error(`Error to update person`);
  }

  async deleteById(id: Schema.Types.ObjectId): Promise<Boolean> {
    if (await Person.deleteOne({ _id: id })) return true;

    throw new Error(`Error to delete person`);
  }
}

export default new PersonRepository();
