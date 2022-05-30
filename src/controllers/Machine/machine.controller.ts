import { Document } from 'mongoose';
import { IRequest, IResponse } from '../../@types';

import { MachineCreateDto } from './dto/machine-create.dto';
import { IMachine } from './machine.interface';
import MachineRepository from './machine.repository';

class MachineController {
  async store(req: IRequest, res: IResponse) {
    try {
      const machineCreateDto: MachineCreateDto = new MachineCreateDto(req.body);
      const machineCreated: Document<IMachine> = await MachineRepository.create(
        machineCreateDto,
      );

      return res
        .status(201)
        .json({ success_msg: `Success! Your object is ${machineCreated}` });
    } catch (error) {
      return res.status(401).json({ error_msg: `Error! ${error}` });
    }
  }
}

export default new MachineController();
