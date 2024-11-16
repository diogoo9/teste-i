import { AppError } from 'src/errors/AppError';

export const erroMiddlaware = (err, req, res, next) => {
  if (req instanceof Response) {
  }
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({
      message: res.message,
    });
  }
};
