import UsersModel from '../models/users.model';
import User from '../interfaces/user.interface';
import Token from '../utils/jwl';

class ProductsService {
  public model: UsersModel;

  constructor() {
    this.model = new UsersModel();
  }

  public async create(user: User): Promise<string> {
    const created = await this.model.create(user);
    if (created.affectedRows > 0) {
      const [newUser] = await this.model.getUserById(created.insertId);
      const token = new Token().generateToken(newUser);
      return token;
    }
    return 'oi';
  }
}

export default ProductsService;