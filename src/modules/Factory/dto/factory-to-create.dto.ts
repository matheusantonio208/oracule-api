export class FactoryToCreateDto {
  name: string;
  constructor(body: FactoryToCreateDto) {
    this.name = body?.name;
  }
}
