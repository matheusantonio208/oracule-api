export class EmployeeToUpdateDto {
  property: string;

  constructor(body: EmployeeToUpdateDto) {
    this.property = body?.property;
  }
}
