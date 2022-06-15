export class CompanyToUpdateDto {
  property: string;

  constructor(body: CompanyToUpdateDto) {
    this.property = body?.property;
  }
}
