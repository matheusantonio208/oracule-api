export class FileCreatedDto {
  name: string;
  link: string;
  category: string;

  constructor(body: FileCreatedDto) {
    this.name = body?.name;
    this.link = body?.link;
    this.category = body?.category;
  }
}
