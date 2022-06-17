import { Document } from 'mongoose';

import Machine from '../../schemas/Machine';

import {
  MachineToCreateDto,
  MachineCreatingDto,
  MachineCreatedDto,
  MachineToUpdateDto,
} from './dto/index.dto';

class MachineRepository {
  async create(machine: MachineCreateDto): Promise<Document<IMachine>> {
    const machineCreate = new Machine(machine);

    if (await machineCreate.save()) {
      return machineCreate;
    }

    throw new Error(`Error to create machine`);
  }

  async getOneById(id: Schema.Types.ObjectId;): Promise<Document<IMachine>> {
    const machine: Document<IMachine> = await Machine.findById(id);
    if (machine) return machine;

    throw new Error(`Error to get machine`);
  }

  async listAll(): Promise<Array<Document<IMachine>>> {
    const machines: Array<Document<IMachine>> = await Machine.find(
      {},
      (err, docs) => {
        if (!err) return docs;
      },
    );

    if (machines) return machines;

    throw new Error(`Error to list categories`);
  }

  async updateById(id: Schema.Types.ObjectId;, data: any): Promise<Document<IMachine>> {
    const updatedMachine: Document<IMachine> = await Machine.findByIdAndUpdate(
      id,
      data,
      (error, document) => {
        if (!error) return document;
      },
    );

    if (updatedMachine) return updatedMachine;

    throw new Error(`Error to update machine`);
  }

  async deleteById(id: Schema.Types.ObjectId;): Promise<Boolean> {
    if (await Machine.deleteOne({ _id: id })) return true;

    throw new Error(`Error to delete machine`);
  }
}

export default new MachineRepository();
