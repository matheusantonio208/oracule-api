export class FactoryCreatingDto {
  name: string;

  constructor(body: FactoryCreatingDto) {
    this.name = body?.name;
  }
}
