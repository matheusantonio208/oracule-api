export class FactoryCreatedDto {
  name: string;

  constructor(body: FactoryCreatedDto) {
    this.name = body?.name;
  }
}
