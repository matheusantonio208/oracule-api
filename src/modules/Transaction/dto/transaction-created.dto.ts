export class TransactionCreatedDto {
  property: string;

  constructor(body: TransactionCreatedDto) {
    this.property = body?.property;
  }
}
