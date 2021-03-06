export class FileCreatingDto {
  name: string;

  link: string;

  type_file: string;

  product_code?: string;

  constructor(body: FileCreatingDto) {
    this.name = body?.name;
    this.link = body?.link;
    this.type_file = body?.type_file;
  }
}
