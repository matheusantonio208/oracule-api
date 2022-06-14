export class shopCreatedDto {
  name: string;
  sku_suffix: string;

  constructor(body: shopCreatedDto) {
    this.name = body?.name;
    this.sku_suffix = body?.sku_suffix;
  }
}
