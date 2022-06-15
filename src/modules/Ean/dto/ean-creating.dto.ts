export class EanCreatingDto {
  ean: string;

  constructor(body: EanCreatingDto) {
    this.ean = body?.ean;
  }
}
