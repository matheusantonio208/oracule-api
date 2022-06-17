import {
  TransactionCreatingDto,
  TransactionCreatedDto,
  TransactionToUpdateDto,
} from './dto/index.dto';

import Transaction from '../../schemas/Transaction';
import { Schema } from 'mongoose';

class TransactionRepository {
  async create(
    transaction: TransactionToCreateDto,
  ): Promise<TransactionToCreateDto> {
    const transactionCreate = new Transaction(transaction);

    if (await transactionCreate.save()) {
      return transactionCreate;
    }

    throw new Error(`Error to create transaction`);
  }

  async getOneById(id: Schema.Types.ObjectId;): Promise<TransactionCreatedDto> {
    const transaction: TransactionCreatedDto = await Transaction.findById(id);
    if (transaction) return transaction;

    throw new Error(`Error to get transaction`);
  }

  async listAll(): Promise<Array<TransactionCreatedDto>> {
    const transactions: Array<TransactionCreatedDto> = await Transaction.find(
      {},
      (err, docs) => {
        if (!err) return docs;
      },
    );

    if (transactions) return transactions;

    throw new Error(`Error to list categories`);
  }

  async updateById(id: Schema.Types.ObjectId;, data: any): Promise<TransactionCreatedDto> {
    const updatedTransaction: TransactionCreatedDto =
      await Transaction.findByIdAndUpdate(id, data, (error, document) => {
        if (!error) return document;
      });

    if (updatedTransaction) return updatedTransaction;

    throw new Error(`Error to update transaction`);
  }

  async deleteById(id: Schema.Types.ObjectId;): Promise<Boolean> {
    if (await Transaction.deleteOne({ _id: id })) return true;

    throw new Error(`Error to delete transaction`);
  }
}

export default new TransactionRepository();
