import { Document } from 'mongoose';

import Machine from '#schemas/Machine';

import { MachineCreateDto } from './dto/machine-create-dto';
import { IMachine } from './machine-interface';

class MachineRepository {
  async create(machine: MachineCreateDto): Promise<Document<IMachine>> {
    const machineCreate = new Machine(machine);

    if (await machineCreate.save()) {
      return machineCreate;
    }

    throw new Error(`Error to create ${machine.name}`);
  }
}

export default new MachineRepository();
