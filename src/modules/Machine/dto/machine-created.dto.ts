import { Schema } from 'mongoose';

export class MachineCreatedDto {
  name: string;

  description: string;

  category: string;

  transaction_id: Schema.Types.ObjectId;

  life_expectancy_in_months: number;

  constructor(body: MachineCreatedDto) {
    this.name = body?.name;
    this.description = body?.description;
    this.category = body?.category;
    this.transaction_id = body?.transaction_id;
    this.life_expectancy_in_months = body?.life_expectancy_in_months;
  }
}
