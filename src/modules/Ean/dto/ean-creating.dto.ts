export class EanCreatingDto {
  _id: string;
  ean: string;

  constructor(body: EanCreatingDto) {
    this.ean = body?.ean;
    this._id = body?._id;
  }
}
