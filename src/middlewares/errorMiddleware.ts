import ApiError from '../lib/ApiError';

const errorMiddleware = function (
  err: Error,
  req: object,
  res: object,
  next: () => void
): void {
  console.warn(err);

  if (err instanceof ApiError) {
    return res.status(err.status).json({
      message: err.message,
      errors: err.errors,
    });
  }
};

export default errorMiddleware;
