import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import HttpException from '../utils/http.exception';

export default function authMiddleware(req: Request, _res: Response, next: NextFunction) {
  try {
    const { authorization: token } = req.headers;

    if (!token) {
      throw new HttpException(401, 'Token não encontrado!');
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET as string);

    req.body.user = decoded;

    next();
  } catch (err) {
    console.log(err);
      
    throw new HttpException(401, 'Não autorizado!');
  }
}