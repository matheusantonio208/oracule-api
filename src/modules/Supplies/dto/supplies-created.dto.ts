export class SuppliesCreatedDto {
  property: string;

  constructor(body: SuppliesCreatedDto) {
    this.property = body?.property;
  }
}
