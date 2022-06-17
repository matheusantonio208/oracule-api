export class PersonCreatedDto {
  property: string;

  constructor(body: PersonCreatedDto) {
    this.property = body?.property;
  }
}
