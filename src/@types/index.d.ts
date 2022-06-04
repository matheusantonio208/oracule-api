import { Request, Response } from 'express-serve-static-core';

export interface IRequest extends Request {
  body: any;
  file?: any;
  buffer?: any;
}
export interface IResponse extends Response {
  status: any;
}
