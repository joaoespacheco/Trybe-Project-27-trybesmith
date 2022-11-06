import { NextFunction, Request, Response } from 'express';
import HttpException from '../utils/http.exception';

const httpErrorMiddleware = (err: Error, req: Request, res: Response, next: NextFunction) => {
  console.log('err', err);
  const { status, message } = err as HttpException;
  res.status(status || 500).json({ message });
  
  next();
};

export default httpErrorMiddleware;