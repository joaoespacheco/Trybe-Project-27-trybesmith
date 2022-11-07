import Token from '../utils/jwl';
import UsersModel from '../models/users.model';
import { IUser } from '../interfaces/user.interface';
import validateReturn from '../interfaces/validateReturn.interface';
import { validateUser } from './validations/validationsInputsValues';

class ProductsService {
  public model: UsersModel;

  constructor() {
    this.model = new UsersModel();
  }

  public async create(user: IUser): Promise<validateReturn> {
    const validateBody = validateUser(user);
    const { type, value } = validateBody;
    if (type !== 'OK') return { type, value };

    const created = await this.model.create(user);
    const [newUser] = await this.model.getUserById(created.insertId);
    const token = new Token().generateToken(newUser);
    return { type: 'CREATED', value: { token } };
  }
}

export default ProductsService;