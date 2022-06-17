export class PromotionCreatingDto {
  property: string;

  constructor(body: PromotionCreatingDto) {
    this.property = body?.property;
  }
}
