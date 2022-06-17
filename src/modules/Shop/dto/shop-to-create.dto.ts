export class ShopToCreateDto {
  property: string;

  constructor(body: ShopToCreateDto) {
    this.property = body?.property;
  }
}
