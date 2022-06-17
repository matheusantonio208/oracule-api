export class CustomerCreatingDto {
  property: string;

  constructor(body: CustomerCreatingDto) {
    this.property = body?.property;
  }
}
