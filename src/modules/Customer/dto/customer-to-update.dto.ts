export class CustomerToUpdateDto {
  name: string;

  constructor(body: CustomerToUpdateDto) {
    this.name = body?.name;
  }
}
