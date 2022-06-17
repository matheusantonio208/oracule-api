export class MachineToUpdateDto {
  property: string;

  constructor(body: MachineToUpdateDto) {
    this.property = body?.property;
  }
}
