export class CategoryToUpdateDto {
  property: string;

  constructor(body: CategoryToUpdateDto) {
    this.property = body?.property;
  }
}
