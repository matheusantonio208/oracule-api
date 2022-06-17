export class FactoryToUpdateDto {
  name: string;

  constructor(body: FactoryToUpdateDto) {
    this.name = body?.name;
  }
}
