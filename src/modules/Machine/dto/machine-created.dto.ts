export class MachineCreatedDto {
  property: string;

  constructor(body: MachineCreatedDto) {
    this.property = body?.property;
  }
}
