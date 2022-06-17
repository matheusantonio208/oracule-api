export class FactoryToUpdateDto {
  property: string;

  constructor(body: FactoryToUpdateDto) {
    this.property = body?.property;
  }
}
