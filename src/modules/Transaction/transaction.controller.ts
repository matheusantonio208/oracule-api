import { IRequest, IResponse } from '../../@types';

import {
  TransactionToCreateDto,
  TransactionCreatingDto,
  TransactionCreatedDto,
  TransactionToUpdateDto,
} from './dto/index.dto';

import transactionRepository from './transaction.repository';

import transactionService from './transaction.service';

class TransactionController {
  async store(req: IRequest, res: IResponse) {
    try {
      // === Get Vars === //
      const transaction: TransactionToCreateDto = new TransactionToCreateDto(
        req.body,
      );

      // === Generate Vars === //
      const transactionProperty: number =
        await transactionService.serviceFunction();

      // === Create Dto === //
      const transactionCreatingDto: TransactionCreatingDto =
        new TransactionCreatingDto({
          ...transaction,
          //code: transactionCode
        });

      // === Create Object === //
      const transactionCreated: TransactionCreatedDto =
        await transactionRepository.create(transactionCreatingDto);

      return res.status(201).json(transactionCreated);
    } catch (error) {
      return res.status(401).json({ error_msg: `Error! ${error}` });
    }
  }

  async index(req: IRequest, res: IResponse) {
    try {
      const { id } = req.params;

      const transaction: TransactionCreatedDto =
        await transactionRepository.getOneById(id);

      return res.status(201).json(transaction);
    } catch (error) {
      return res.status(401).json({ error_msg: `Error! ${error}` });
    }
  }

  async show(req: IRequest, res: IResponse) {
    try {
      const { property, sort, itensPerPage, pagination } = req.query;

      const transaction: Array<TransactionCreatedDto> =
        await transactionRepository.listAll(
          property,
          sort,
          itensPerPage,
          pagination,
        );

      return res.status(201).json(transaction);
    } catch (error) {
      return res.status(401).json({ error_msg: `Error! ${error}` });
    }
  }

  async delete(req: IRequest, res: IResponse) {
    try {
      const { id } = req.params;

      await transactionRepository.deleteById(id);

      return res
        .status(201)
        .json({ success_msg: `Success! Your transaction was deleted` });
    } catch (error) {
      return res.status(401).json({ error_msg: `Error! ${error}` });
    }
  }

  async update(req: IRequest, res: IResponse) {
    try {
      const { id } = req.params;
      const data: TransactionToUpdateDto = new TransactionToUpdateDto(req.body);

      const transactionUpdated: TransactionCreatedDto =
        await transactionRepository.updateById(id, data);

      return res.status(201).json(transactionUpdated);
    } catch (error) {
      return res.status(401).json({ error_msg: `Error! ${error}` });
    }
  }
}

export default new TransactionController();
