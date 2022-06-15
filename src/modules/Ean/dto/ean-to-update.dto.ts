export class EanToUpdateDto {
  ean: string;

  constructor(body: EanToUpdateDto) {
    this.ean = body?.ean;
  }
}
