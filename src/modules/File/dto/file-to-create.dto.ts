export class FileToCreateDto {
  name: string;
  link: string;
  category: string;

  constructor(body: FileToCreateDto) {
    this.name = body?.name;
    this.link = body?.link;
    this.category = body?.category;
  }
}
