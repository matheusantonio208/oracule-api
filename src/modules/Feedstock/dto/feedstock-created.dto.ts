export class FeedstockCreatedDto {
  property: string;

  constructor(body: FeedstockCreatedDto) {
    this.property = body?.property;
  }
}
