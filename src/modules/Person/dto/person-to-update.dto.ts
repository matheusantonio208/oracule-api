export class PersonToUpdateDto {
  property: string;

  constructor(body: PersonToUpdateDto) {
    this.property = body?.property;
  }
}
