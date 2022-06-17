export class CustomerCreatedDto {
  property: string;

  constructor(body: CustomerCreatedDto) {
    this.property = body?.property;
  }
}
