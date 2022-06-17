import { IRequest, IResponse } from '../../@types';
import {
  MachineToCreateDto,
  MachineCreatingDto,
  MachineCreatedDto,
  MachineToUpdateDto,
} from './dto/index.dto';
import machineRepository from './machine.repository';
import machineService from './machine.service';

class MachineController {
  async store(req: IRequest, res: IResponse) {
    try {
      // === Get Vars === //
      const machine: MachineToCreateDto = new MachineToCreateDto(req.body);

      // === Generate Vars === //
      const machineProperty: number = await machineService.serviceFunction();

      // === Create Dto === //
      const machineCreatingDto: MachineCreatingDto = new MachineCreatingDto({
        ...machine,
        // code: machineCode
      });

      // === Create Object === //
      const machineCreated: MachineCreatedDto = await machineRepository.create(
        machineCreatingDto,
      );

      return res.status(201).json(machineCreated);
    } catch (error) {
      return res.status(401).json({ error_msg: `Error! ${error}` });
    }
  }

  async index(req: IRequest, res: IResponse) {
    try {
      const { id } = req.params;

      const machine: MachineCreatedDto = await machineRepository.getOneById(id);

      return res.status(201).json(machine);
    } catch (error) {
      return res.status(401).json({ error_msg: `Error! ${error}` });
    }
  }

  async show(req: IRequest, res: IResponse) {
    try {
      const { property, sort, itensPerPage, pagination } = req.query;

      const machine: Array<MachineCreatedDto> = await machineRepository.listAll(
        property,
        sort,
        itensPerPage,
        pagination,
      );

      return res.status(201).json(machine);
    } catch (error) {
      return res.status(401).json({ error_msg: `Error! ${error}` });
    }
  }

  async delete(req: IRequest, res: IResponse) {
    try {
      const { id } = req.params;

      await machineRepository.deleteById(id);

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
      const data: MachineToUpdateDto = new MachineToUpdateDto(req.body);

      const machineUpdated: MachineCreatedDto =
        await machineRepository.updateById(id, data);

      return res.status(201).json(machineUpdated);
    } catch (error) {
      return res.status(401).json({ error_msg: `Error! ${error}` });
    }
  }
}

export default new MachineController();
