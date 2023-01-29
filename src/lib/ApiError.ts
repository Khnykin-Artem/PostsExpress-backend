class ApiError extends Error {
  status: number;
  errors: Array<string>;

  constructor(status: number, message: string, errors: Array<string> = []) {
    super(message);

    this.status = status;
    this.errors = errors;
  }

  static BadRequest(message: string, errors: Array<string> = []): ApiError {
    return new ApiError(400, message, errors);
  }

  static Unauthorized(message: string, errors: Array<string> = []): ApiError {
    return new ApiError(401, message, errors);
  }

  static Forbidden(message: string, errors: Array<string> = []): ApiError {
    return new ApiError(403, message, errors);
  }

  static NotFound(message: string, errors: Array<string> = []): ApiError {
    return new ApiError(404, message, errors);
  }

  static RequestTimeout(message: string, errors: Array<string> = []): ApiError {
    return new ApiError(408, message, errors);
  }

  static TooManyRequests(
    message: string,
    errors: Array<string> = []
  ): ApiError {
    return new ApiError(429, message, errors);
  }

  static Internal(message: string, errors: Array<string> = []): ApiError {
    return new ApiError(500, message, errors);
  }
}

export default ApiError;
