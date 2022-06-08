import { Schema } from 'mongoose';

import { IOrder } from '../order.interface';

export class OrderCreateDto implements IOrder {
  track_code: string;

  constructor(body: IOrder) {
    this.track_code = body?.track_code;
  }
}
