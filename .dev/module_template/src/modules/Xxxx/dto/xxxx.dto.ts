export class XxxxDto {
  property: string;

  constructor(body: XxxxDto) {
    this.property = body?.property;
  }
}
