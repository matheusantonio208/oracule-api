export class CustomerCreatingDto {
  name: string;

  constructor(body: CustomerCreatingDto) {
    this.name = body?.name;
  }
}
