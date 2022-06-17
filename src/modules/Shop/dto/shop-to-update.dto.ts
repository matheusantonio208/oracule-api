export class ShopToUpdateDto {
  name: string;
  sku_suffix: string;

  constructor(body: ShopToUpdateDto) {
    this.name = body?.name;
    this.sku_suffix = body?.sku_suffix;
  }
}
