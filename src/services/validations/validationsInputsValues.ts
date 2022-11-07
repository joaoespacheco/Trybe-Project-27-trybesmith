import { ILogin, IUser } from '../../interfaces/user.interface';
import IValidateReturn from '../../interfaces/validateReturn.interface';
import Product from '../../interfaces/product.interface';
import { loginSchema, productSchema, userSchema } from './schemas';

function validateLogin(userLogin: ILogin):IValidateReturn {
  const { error, value } = loginSchema.validate(userLogin);

  if (error) {
    return { type: 'BAD_REQUEST', value: { message: error?.message } };
  }

  return { type: 'OK', value: { message: value } };
}

function validateProduct(product: Product):IValidateReturn {
  const { error, value } = productSchema.validate(product);

  if (error?.message.includes('is required')) {
    return { type: 'BAD_REQUEST', value: { message: error?.message } };
  }

  if (error) {
    return { type: 'UNPROCESSABLE', value: { message: error?.message } };
  }
  return { type: 'OK', value: { message: value } };
}

function validateUser(user: IUser): IValidateReturn {
  const { error, value } = userSchema.validate(user);

  if (error?.message.includes('is required')) {
    return { type: 'BAD_REQUEST', value: { message: error?.message } };
  }

  if (error) {
    return { type: 'UNPROCESSABLE', value: { message: error?.message } };
  }
  return { type: 'OK', value: { message: value } };
}

export {
  validateLogin,
  validateProduct,
  validateUser,
};