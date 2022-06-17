import { Document } from 'mongoose';
import { IRequest, IResponse } from '../../@types';
import {
  MachineToCreateDto,
  MachineCreatingDto,
  MachineCreatedDto,
  MachineToUpdateDto,
} from './dto/index.dto';
import MachineRepository from './machine.repository';

class MachineController {
  async store(req: IRequest, res: IResponse) {
    try {
      const machineCreateDto: MachineCreateDto = new MachineCreateDto(req.body);

      const machineCreated: Document<IMachine> = await MachineRepository.create(
        machineCreateDto,
      );

      return res.status(201).json(machineCreated);
    } catch (error) {
      return res.status(401).json({ error_msg: `Error! ${error}` });
    }
  }

  async index(req: IRequest, res: IResponse) {
    try {
      const { id } = req.params;

      const machine: Document<IMachine> = await MachineRepository.getOneById(
        id,
      );

      return res.status(201).json(machine);
    } catch (error) {
      return res.status(401).json({ error_msg: `Error! ${error}` });
    }
  }

  async show(req: IRequest, res: IResponse) {
    try {
      const machine: Array<Document<IMachine>> =
        await MachineRepository.listAll();

      return res.status(201).json(machine);
    } catch (error) {
      return res.status(401).json({ error_msg: `Error! ${error}` });
    }
  }

  async delete(req: IRequest, res: IResponse) {
    try {
      const { id } = req.params;

      await MachineRepository.deleteById(id);

      return res
        .status(201)
        .json({ success_msg: `Success! Your machine was deleted` });
    } catch (error) {
      return res.status(401).json({ error_msg: `Error! ${error}` });
    }
  }

  async update(req: IRequest, res: IResponse) {
    try {
      const { id } = req.params;
      const data = req.body;

      const machineUpdated = await MachineRepository.updateById(id, data);

      return res.status(201).json(machineUpdated);
    } catch (error) {
      return res.status(401).json({ error_msg: `Error! ${error}` });
    }
  }
}

export default new MachineController();
