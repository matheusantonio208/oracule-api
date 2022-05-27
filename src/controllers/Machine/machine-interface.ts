import { Schema } from 'mongoose';

export interface IMachine {
  name: string;
  description: string;
  category: string;
  // documents: Array<DocumentList>;
  transaction_id: Schema.Types.ObjectId;
  life_expectancy_in_months: number;
  // maintenance_history: Array<MaintenanceList>;
  // production_history: Array<ProductionList>;
}
