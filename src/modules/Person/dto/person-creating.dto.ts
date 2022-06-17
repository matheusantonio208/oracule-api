export class PersonCreatingDto {
  property: string;

  constructor(body: PersonCreatingDto) {
    this.property = body?.property;
  }
}
