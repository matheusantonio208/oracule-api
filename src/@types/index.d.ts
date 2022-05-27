import { Request, Response } from 'express-serve-static-core';

export interface IRequest extends Request {
  body: any;
}
export interface IResponse extends Response {
  status: any;
}
