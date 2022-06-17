import { IRequest, IResponse } from '../../@types';

import {
  TransactionToCreateDto,
  TransactionCreatingDto,
  TransactionCreatedDto,
  TransactionToUpdateDto,
} from './dto/index.dto';

import TransactionRepository from './transaction.repository';

class TransactionController {
  async store(req: IRequest, res: IResponse) {
    try {
      const transactionCreateDto: TransactionToCreateDto =
        new TransactionToCreateDto(req.body);

      const transactionCreated: TransactionCreatedDto =
        await TransactionRepository.create(transactionCreateDto);

      return res.status(201).json(transactionCreated);
    } catch (error) {
      return res.status(401).json({ error_msg: `Error! ${error}` });
    }
  }

  async index(req: IRequest, res: IResponse) {
    try {
      const { id } = req.params;

      const transaction: TransactionCreatedDto =
        await TransactionRepository.getOneById(id);

      return res.status(201).json(transaction);
    } catch (error) {
      return res.status(401).json({ error_msg: `Error! ${error}` });
    }
  }

  async show(req: IRequest, res: IResponse) {
    try {
      const transaction: Array<TransactionCreatedDto> =
        await TransactionRepository.listAll();

      return res.status(201).json(transaction);
    } catch (error) {
      return res.status(401).json({ error_msg: `Error! ${error}` });
    }
  }

  async delete(req: IRequest, res: IResponse) {
    try {
      const { id } = req.params;

      await TransactionRepository.deleteById(id);

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
      const data = req.body;

      const transactionUpdated = await TransactionRepository.updateById(
        id,
        data,
      );

      return res.status(201).json(transactionUpdated);
    } catch (error) {
      return res.status(401).json({ error_msg: `Error! ${error}` });
    }
  }
}

export default new TransactionController();
