import { Document } from 'mongoose';

import Customer from '../../schemas/Customer';

import {
  CustomerToCreateDto,
  CustomerCreatingDto,
  CustomerCreatedDto,
  CustomerToUpdateDto,
} from './dto/index.dto';

class CustomerRepository {
  async create(customer: CustomerCreateDto): Promise<Document<ICustomer>> {
    const customerCreate = new Customer(customer);

    if (await customerCreate.save()) {
      return customerCreate;
    }

    throw new Error(`Error to create customer`);
  }

  async getOneById(id: Schema.Types.ObjectId;): Promise<Document<ICustomer>> {
    const customer: Document<ICustomer> = await Customer.findById(id);
    if (customer) return customer;

    throw new Error(`Error to get customer`);
  }

  async listAll(): Promise<Array<Document<ICustomer>>> {
    const customers: Array<Document<ICustomer>> = await Customer.find(
      {},
      (err, docs) => {
        if (!err) return docs;
      },
    );

    if (customers) return customers;

    throw new Error(`Error to list categories`);
  }

  async updateById(id: Schema.Types.ObjectId;, data: any): Promise<Document<ICustomer>> {
    const updatedCustomer: Document<ICustomer> =
      await Customer.findByIdAndUpdate(id, data, (error, document) => {
        if (!error) return document;
      });

    if (updatedCustomer) return updatedCustomer;

    throw new Error(`Error to update customer`);
  }

  async deleteById(id: Schema.Types.ObjectId;): Promise<Boolean> {
    if (await Customer.deleteOne({ _id: id })) return true;

    throw new Error(`Error to delete customer`);
  }
}

export default new CustomerRepository();
