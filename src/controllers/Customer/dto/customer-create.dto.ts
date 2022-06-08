import { Schema } from 'mongoose';

import { ICustomer } from '../customer.interface';

export class CustomerCreateDto implements ICustomer {
  name: string;

  constructor(body: ICustomer) {
    this.name = body?.name;
  }
}
