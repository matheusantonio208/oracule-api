export class ProviderCreatedDto {
  property: string;

  constructor(body: ProviderCreatedDto) {
    this.property = body?.property;
  }
}
