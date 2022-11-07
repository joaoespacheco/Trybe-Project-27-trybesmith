import UserModel from '../models/users.model';
import { ILogin } from '../interfaces/user.interface';
import validateReturn from '../interfaces/validateReturn.interface';
import Token from '../utils/jwl';
import validations from './validations/validationsInputsValues';

class LoginService {
  public model: UserModel;

  constructor() {
    this.model = new UserModel();
  }

  public async login(userLogin: ILogin): Promise<validateReturn> {
    const validateBody = validations(userLogin);
    const { type, value } = validateBody;
    if (type !== 'OK') return { type, value };

    const user = await this.model.getUserByUsernameAndPassword(userLogin);
    if (!user) return { type: 'UNAUTHORIZED', value: { message: 'Username or password invalid' } };

    const token = new Token().generateToken(user);
    return { type: 'OK', value: { token } };
  }
}

export default LoginService;