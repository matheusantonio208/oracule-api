export class FileCreatedDto {
  name: string;

  link: string;

  type_file: string;

  product_code?: string;

  constructor(body: FileCreatedDto) {
    this.name = body?.name;
    this.link = body?.link;
    this.type_file = body?.type_file;
    this.product_code = body?.product_code;
  }
}
