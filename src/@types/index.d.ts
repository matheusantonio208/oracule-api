import { Request, Response } from 'express-serve-static-core';

export interface IRequest extends Request {
  body: any;
  mockups?: any;
  art?: any;
  psd?: any;
  buffer?: any;
}
export interface IResponse extends Response {
  status: any;
}
