export class TransactionToUpdateDto {
  property: string;

  constructor(body: TransactionToUpdateDto) {
    this.property = body?.property;
  }
}
