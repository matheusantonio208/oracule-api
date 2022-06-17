export class SuppliesToUpdateDto {
  property: string;

  constructor(body: SuppliesToUpdateDto) {
    this.property = body?.property;
  }
}
