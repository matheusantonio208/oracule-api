export class SuppliesCreatingDto {
  property: string;

  constructor(body: SuppliesCreatingDto) {
    this.property = body?.property;
  }
}
