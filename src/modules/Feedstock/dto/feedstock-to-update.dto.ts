export class FeedstockToUpdateDto {
  property: string;

  constructor(body: FeedstockToUpdateDto) {
    this.property = body?.property;
  }
}
