export class EmployeeCreatedDto {
  property: string;

  constructor(body: EmployeeCreatedDto) {
    this.property = body?.property;
  }
}
