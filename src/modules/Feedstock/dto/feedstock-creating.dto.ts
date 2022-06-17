export class FeedstockCreatingDto {
  property: string;

  constructor(body: FeedstockCreatingDto) {
    this.property = body?.property;
  }
}
