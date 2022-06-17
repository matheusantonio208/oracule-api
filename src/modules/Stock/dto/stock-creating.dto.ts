export class StockCreatingDto {
  property: string;

  constructor(body: StockCreatingDto) {
    this.property = body?.property;
  }
}
