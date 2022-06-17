import { Schema } from 'mongoose';

import Machine from '../../schemas/Machine';
import {
  MachineCreatingDto,
  MachineCreatedDto,
  MachineToUpdateDto,
} from './dto/index.dto';

class MachineRepository {
  async create(machine: MachineCreatingDto): Promise<MachineCreatedDto> {
    const machineCreate = new Machine(machine);

    if (await machineCreate.save()) {
      return machineCreate;
    }

    throw new Error(`Error to create machine`);
  }

  async getOneById(id: Schema.Types.ObjectId): Promise<MachineCreatedDto> {
    const machine: MachineCreatedDto = await Machine.findById(id);
    if (machine) return machine;

    throw new Error(`Error to get machine`);
  }

  async listAll(
    property: string,
    sort: string,
    itensPerPage: number,
    pagination: number,
  ): Promise<Array<MachineCreatedDto>> {
    const machines: Array<MachineCreatedDto> = await Machine.find(
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

    if (machines) return machines;

    throw new Error(`Error to list categories`);
  }

  async updateById(
    id: Schema.Types.ObjectId,
    data: MachineToUpdateDto,
  ): Promise<MachineCreatedDto> {
    const updatedMachine: MachineCreatedDto = await Machine.findByIdAndUpdate(
      id,
      data,
      (error, document) => {
        if (!error) return document;
        throw error;
      },
    );

    if (updatedMachine) return updatedMachine;

    throw new Error(`Error to update machine`);
  }

  async deleteById(id: Schema.Types.ObjectId): Promise<Boolean> {
    if (await Machine.deleteOne({ _id: id })) return true;

    throw new Error(`Error to delete machine`);
  }
}

export default new MachineRepository();
