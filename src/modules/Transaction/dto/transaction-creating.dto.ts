export class TransactionCreatingDto {
  property: string;

  constructor(body: TransactionCreatingDto) {
    this.property = body?.property;
  }
}
