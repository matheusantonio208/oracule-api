export class FactoryCreatedDto {
  property: string;

  constructor(body: FactoryCreatedDto) {
    this.property = body?.property;
  }
}
