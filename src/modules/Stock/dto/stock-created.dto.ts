export class StockCreatedDto {
  property: string;

  constructor(body: StockCreatedDto) {
    this.property = body?.property;
  }
}
