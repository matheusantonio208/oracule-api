import Youch from 'youch';
import 'express-async-errors';

export default async (error, req, res, next) => {
  if (process.env.NODE_ENV === 'development') {
    const errors = await new Youch(error, req).toJSON();
    return res.status(500).json(errors);
  }

  return res.status(500).json({ error: 'Internal server error' });
};
