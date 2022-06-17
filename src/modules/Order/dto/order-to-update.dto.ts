export class OrderToUpdateDto {
  property: string;

  constructor(body: OrderToUpdateDto) {
    this.property = body?.property;
  }
}
