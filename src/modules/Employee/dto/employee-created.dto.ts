export class EmployeeCreatedDto {
  name: string;

  constructor(body: EmployeeCreatedDto) {
    this.name = body?.name;
  }
}
