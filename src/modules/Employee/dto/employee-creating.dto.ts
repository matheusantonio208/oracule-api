export class EmployeeCreatingDto {
  name: string;

  constructor(body: EmployeeCreatingDto) {
    this.name = body?.name;
  }
}
