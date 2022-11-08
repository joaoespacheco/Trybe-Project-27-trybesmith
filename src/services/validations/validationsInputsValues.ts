import { ILogin, IUser } from '../../interfaces/user.interface';
import IValidateReturn from '../../interfaces/validateReturn.interface';
import Product from '../../interfaces/product.interface';
import { loginSchema, productSchema, userSchema, orderScheme } from './schemas';
import IOrder from '../../interfaces/order.interface';

const requiredError = 'is required';

function validateLogin(userLogin: ILogin):IValidateReturn {
  const { error, value } = loginSchema.validate(userLogin);

  if (error) {
    return { type: 'BAD_REQUEST', value: { message: error?.message } };
  }

  return { type: 'OK', value: { message: value } };
}

function validateProduct(product: Product):IValidateReturn {
  const { error, value } = productSchema.validate(product);

  if (error?.message.includes(requiredError)) {
    return { type: 'BAD_REQUEST', value: { message: error?.message } };
  }

  if (error) {
    return { type: 'UNPROCESSABLE', value: { message: error?.message } };
  }
  return { type: 'OK', value: { message: value } };
}

function validateUser(user: IUser): IValidateReturn {
  const { error, value } = userSchema.validate(user);

  if (error?.message.includes(requiredError)) {
    return { type: 'BAD_REQUEST', value: { message: error?.message } };
  }

  if (error) {
    return { type: 'UNPROCESSABLE', value: { message: error?.message } };
  }
  return { type: 'OK', value: { message: value } };
}

function validateOrder(productIds: IOrder): IValidateReturn {
  const { error, value } = orderScheme.validate(productIds);

  if (error?.message.includes(requiredError)) {
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
  validateOrder,
};