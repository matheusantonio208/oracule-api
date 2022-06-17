export class FileToCreateDto {
  name: string;

  link: string;

  type_file: string;

  constructor(body: FileToCreateDto) {
    this.name = body?.name;
    this.link = body?.link;
    this.type_file = body?.type_file;
  }
}
