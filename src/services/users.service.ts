import UsersModel from '../models/users.model';
import { IUser } from '../interfaces/user.interface';
import Token from '../utils/jwl';

class ProductsService {
  public model: UsersModel;

  constructor() {
    this.model = new UsersModel();
  }

  public async create(user: IUser): Promise<string> {
    const created = await this.model.create(user);
    const [newUser] = await this.model.getUserById(created.insertId);
    const token = new Token().generateToken(newUser);
    return token;
  }
}

export default ProductsService;