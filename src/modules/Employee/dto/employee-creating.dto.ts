export class EmployeeCreatingDto {
  property: string;

  constructor(body: EmployeeCreatingDto) {
    this.property = body?.property;
  }
}
