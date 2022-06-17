export class CustomerToCreateDto {
  name: string;

  constructor(body: CustomerToCreateDto) {
    this.name = body?.name;
  }
}
