import { NextFunction, Response, Request } from 'express';
import Youch from 'youch';

import 'express-async-errors';

export default async (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<Response> => {
  if (process.env.NODE_ENV === 'development') {
    const errors = await new Youch(err, req).toJSON();
    return res.status(500).json(errors);
  }

  return res.status(500).json({ error: 'Internal server error' });
};
