export class FileToUpdateDto {
  name: string;

  link: string;

  type_file: string;

  constructor(body: FileToUpdateDto) {
    this.name = body?.name;
    this.link = body?.link;
    this.type_file = body?.type_file;
  }
}
