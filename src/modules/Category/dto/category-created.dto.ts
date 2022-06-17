export class CategoryCreatedDto {
  property: string;

  constructor(body: CategoryCreatedDto) {
    this.property = body?.property;
  }
}
