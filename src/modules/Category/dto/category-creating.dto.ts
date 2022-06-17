export class CategoryCreatingDto {
  property: string;

  constructor(body: CategoryCreatingDto) {
    this.property = body?.property;
  }
}
