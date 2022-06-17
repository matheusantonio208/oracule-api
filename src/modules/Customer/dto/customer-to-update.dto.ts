export class CustomerToUpdateDto {
  property: string;

  constructor(body: CustomerToUpdateDto) {
    this.property = body?.property;
  }
}
