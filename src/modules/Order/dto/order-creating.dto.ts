export class OrderCreatingDto {
  property: string;

  constructor(body: OrderCreatingDto) {
    this.property = body?.property;
  }
}
