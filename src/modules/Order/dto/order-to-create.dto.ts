export class OrderToCreateDto {
  track_code: string;

  constructor(body: OrderToCreateDto) {
    this.track_code = body?.track_code;
  }
}
