export class StockToUpdateDto {
  property: string;

  constructor(body: StockToUpdateDto) {
    this.property = body?.property;
  }
}
