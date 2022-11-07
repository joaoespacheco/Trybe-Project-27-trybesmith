import { ILogin } from '../../interfaces/user.interface';
import IValidateReturn from '../../interfaces/validateReturn.interface';
import schemas from './schemas';

export default function validateLogin(userLogin: ILogin):IValidateReturn {
  const { error, value } = schemas.loginSchema.validate(userLogin);

  if (error) {
    return { type: 'BAD_REQUEST', value: { message: error?.message } };
  }

  return { type: 'OK', value: { message: value } };
}