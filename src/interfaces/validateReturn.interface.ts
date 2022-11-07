import { statusCodes } from '../utils/statusCodes';

export default interface IValidateReturn {
  type: keyof typeof statusCodes;
  value: { 
    token?: string,
    message?: string 
  };
}
