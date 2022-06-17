export class OrderCreatedDto {
  property: string;

  constructor(body: OrderCreatedDto) {
    this.property = body?.property;
  }
}
