import { Schema } from 'mongoose';

export class XxxxCreateDto {
  property: string;

  constructor(body: XxxxCreateDto) {
    this.property = body?.property;
  }
}
