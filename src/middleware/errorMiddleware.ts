import { Request, Response } from 'express';
import ApiError from '../lib/ApiError';

const errorMiddleware = function (
  err: Error,
  req: Request,
  res: Response
): unknown {
  console.log(err);

  if (err instanceof ApiError) {
    return res.status(err.status).json({
      message: err.message,
      errors: err.errors,
    }) as unknown;
  }

  return res.status(500).json({
    message: 'Unexpected error!',
    errors: [],
  }) as unknown;
};

export default errorMiddleware;
