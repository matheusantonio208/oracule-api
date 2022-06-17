export class ProviderToUpdateDto {
  property: string;

  constructor(body: ProviderToUpdateDto) {
    this.property = body?.property;
  }
}
