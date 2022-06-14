export class ShopCreateDto {
  name: string;
  sku_suffix: string;

  constructor(body: ShopCreateDto) {
    this.name = body?.name;
    this.sku_suffix = body?.sku_suffix;
  }
}
