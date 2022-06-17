export class FileCreatingDto {
  property: string;

  constructor(body: FileCreatingDto) {
    this.property = body?.property;
  }
}
