export class FileToUpdateDto {
  property: string;

  constructor(body: FileToUpdateDto) {
    this.property = body?.property;
  }
}
