export class ShopCreatedDto {
  name: string;

  sku_suffix: string;

  constructor(body: ShopCreatedDto) {
    this.name = body?.name;
    this.sku_suffix = body?.sku_suffix;
  }
}
