export class EmployeeToCreateDto {
  name: string;

  constructor(body: EmployeeToCreateDto) {
    this.name = body?.name;
  }
}
