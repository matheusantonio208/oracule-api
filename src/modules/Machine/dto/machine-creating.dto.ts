export class MachineCreatingDto {
  property: string;

  constructor(body: MachineCreatingDto) {
    this.property = body?.property;
  }
}
