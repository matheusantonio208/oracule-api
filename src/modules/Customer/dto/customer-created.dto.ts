export class CustomerCreatedDto {
  name: string;

  constructor(body: CustomerCreatedDto) {
    this.name = body?.name;
  }
}
