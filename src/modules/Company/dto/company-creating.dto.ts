export class CompanyCreatingDto {
  property: string;

  constructor(body: CompanyCreatingDto) {
    this.property = body?.property;
  }
}
