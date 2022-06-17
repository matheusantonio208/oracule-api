import { Request, Response } from 'express-serve-static-core';
import { Schema } from 'mongoose';

export interface IRequest extends Request {
  body?: any;
  params?: {
    id?: Schema.Types.ObjectId;
    key?: string;
    sort?: string;
    itensPerPage?: number;
    pagination?: number;
    name?: string;
  };
}

export interface IMulterRequest extends Request {
  buffer: Buffer;
  originalname: string;
  encoding: string;
  mimetype: string;
  size: number;
  destination: string;
  filename: string;
  path: string;
  fieldname: string;
  truncated: boolean;
  stream: any;
  error: any;
  bytes: number;
  fields: any;
  files: any;
}

export interface IResponse extends Response {
  status: any;
}
