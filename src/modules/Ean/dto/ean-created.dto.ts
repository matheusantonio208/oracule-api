export class EanCreatedDto {
  _id: string;
  ean: string;

  constructor(body: EanCreatedDto) {
    this.ean = body?.ean;
    this._id = body?._id;
  }
}
