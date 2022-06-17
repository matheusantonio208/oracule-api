export class ShopCreatingDto {
  property: string;

  constructor(body: ShopCreatingDto) {
    this.property = body?.property;
  }
}
