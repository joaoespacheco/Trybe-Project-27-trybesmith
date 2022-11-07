import jsonwebtoken from 'jsonwebtoken';
import { IUser } from '../interfaces/user.interface';

export default class Token {
  public jwt = jsonwebtoken;

  public generateToken(user: IUser): string {
    const payload = { id: user.id, username: user.username };
    return this.jwt.sign(payload, process.env.JWT_SECRET as string, {
      algorithm: 'HS256',
      expiresIn: '1d',
    });
  }
}
