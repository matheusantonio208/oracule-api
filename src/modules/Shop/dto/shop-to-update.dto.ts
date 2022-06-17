export class ShopToUpdateDto {
  property: string;

  constructor(body: ShopToUpdateDto) {
    this.property = body?.property;
  }
}
