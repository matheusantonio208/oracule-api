export class PromotionCreatedDto {
  property: string;

  constructor(body: PromotionCreatedDto) {
    this.property = body?.property;
  }
}
