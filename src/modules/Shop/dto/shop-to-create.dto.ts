export class ShopToCreateDto {
  name: string;
  sku_suffix: string;

  constructor(body: ShopToCreateDto) {
    this.name = body?.name;
    this.sku_suffix = body?.sku_suffix;
  }
}
