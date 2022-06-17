import { Schema } from 'mongoose';
import Customer from '../../schemas/Customer';

import {
  CustomerCreatingDto,
  CustomerCreatedDto,
  CustomerToUpdateDto,
} from './dto/index.dto';

class CustomerRepository {
  async create(customer: CustomerCreatingDto): Promise<CustomerCreatedDto> {
    const customerCreate = new Customer(customer);

    if (await customerCreate.save()) {
      return customerCreate;
    }

    throw new Error(`Error to create customer`);
  }

  async getOneById(id: Schema.Types.ObjectId): Promise<CustomerCreatedDto> {
    const customer: CustomerCreatedDto = await Customer.findById(id);
    if (customer) return customer;

    throw new Error(`Error to get customer`);
  }

  async listAll(
    property: string,
    sort: string,
    itensPerPage: number,
    pagination: number,
  ): Promise<Array<CustomerCreatedDto>> {
    const customers: Array<CustomerCreatedDto> = await Customer.find(
      {},
      (err, docs) => {
        if (!err) return docs;
      },
    )
      .sort([[property, sort]])
      .skip(pagination)
      .limit(itensPerPage)
      .exec();

    if (customers) return customers;

    throw new Error(`Error to list categories`);
  }

  async updateById(
    id: Schema.Types.ObjectId,
    data: CustomerToUpdateDto,
  ): Promise<CustomerCreatedDto> {
    const updatedCustomer: CustomerCreatedDto =
      await Customer.findByIdAndUpdate(id, data, (error, document) => {
        if (!error) return document;
      });

    if (updatedCustomer) return updatedCustomer;

    throw new Error(`Error to update customer`);
  }

  async deleteById(id: Schema.Types.ObjectId): Promise<Boolean> {
    if (await Customer.deleteOne({ _id: id })) return true;

    throw new Error(`Error to delete customer`);
  }
}

export default new CustomerRepository();
