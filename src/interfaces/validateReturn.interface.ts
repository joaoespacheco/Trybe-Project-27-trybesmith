import { statusCodes } from '../utils/statusCodes';
import Product from './product.interface';
import Order from './order.interface';

export default interface IValidateReturn {
  type: keyof typeof statusCodes;
  value: { 
    token?: string,
    message?: string,
  } | Product | Order;
}
