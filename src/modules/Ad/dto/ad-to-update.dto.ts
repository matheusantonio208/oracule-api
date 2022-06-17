export class AdToUpdateDto {
  property: string;

  constructor(body: AdToUpdateDto) {
    this.property = body?.property;
  }
}
