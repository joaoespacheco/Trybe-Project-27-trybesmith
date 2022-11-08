import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import HttpException from '../utils/http.exception';

export default function authMiddleware(req: Request, _res: Response, next: NextFunction) {
  const { authorization: token } = req.headers;

  if (!token) {
    throw new HttpException(401, 'Token not found');
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET as string);
    req.body.user = decoded;
    next();
  } catch (err) {
    throw new HttpException(401, 'Invalid token');
  }
}