export class EmployeeToUpdateDto {
  name: string;

  constructor(body: EmployeeToUpdateDto) {
    this.name = body?.name;
  }
}
