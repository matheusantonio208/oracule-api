export class ShopCreatingDto {
  name: string;

  sku_suffix: string;

  constructor(body: ShopCreatingDto) {
    this.name = body?.name;
    this.sku_suffix = body?.sku_suffix;
  }
}
