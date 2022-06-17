export class ProviderCreatingDto {
  property: string;

  constructor(body: ProviderCreatingDto) {
    this.property = body?.property;
  }
}
