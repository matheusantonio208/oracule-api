import { Document } from 'mongoose';

import Transaction from '../../schemas/Transaction';

import { TransactionCreateDto } from './dto/transaction-create.dto';
import { ITransaction } from './transaction.interface';

class TransactionRepository {
  async create(
    transaction: TransactionCreateDto,
  ): Promise<Document<ITransaction>> {
    const transactionCreate = new Transaction(transaction);

    if (await transactionCreate.save()) {
      return transactionCreate;
    }

    throw new Error(`Error to create transaction`);
  }

  async getOneById(id: string): Promise<Document<ITransaction>> {
    const transaction: Document<ITransaction> = await Transaction.findById(id);
    if (transaction) return transaction;

    throw new Error(`Error to get transaction`);
  }

  async listAll(): Promise<Array<Document<ITransaction>>> {
    const transactions: Array<Document<ITransaction>> = await Transaction.find(
      {},
      (err, docs) => {
        if (!err) return docs;
      },
    );

    if (transactions) return transactions;

    throw new Error(`Error to list categories`);
  }

  async updateById(id: string, data: any): Promise<Document<ITransaction>> {
    const updatedTransaction: Document<ITransaction> =
      await Transaction.findByIdAndUpdate(id, data, (error, document) => {
        if (!error) return document;
      });

    if (updatedTransaction) return updatedTransaction;

    throw new Error(`Error to update transaction`);
  }

  async deleteById(id: string): Promise<Boolean> {
    if (await Transaction.deleteOne({ _id: id })) return true;

    throw new Error(`Error to delete transaction`);
  }
}

export default new TransactionRepository();
