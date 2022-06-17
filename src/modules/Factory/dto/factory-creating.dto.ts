export class FactoryCreatingDto {
  property: string;

  constructor(body: FactoryCreatingDto) {
    this.property = body?.property;
  }
}
