export class EanToCreateDto {
  ean: string;

  constructor(body: EanToCreateDto) {
    this.ean = body?.ean;
  }
}
