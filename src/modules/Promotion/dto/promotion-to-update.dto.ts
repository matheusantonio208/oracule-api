export class PromotionToUpdateDto {
  property: string;

  constructor(body: PromotionToUpdateDto) {
    this.property = body?.property;
  }
}
