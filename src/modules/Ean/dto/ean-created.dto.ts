export class EanCreatedDto {
  ean: string;

  constructor(body: EanCreatedDto) {
    this.ean = body?.ean;
  }
}
