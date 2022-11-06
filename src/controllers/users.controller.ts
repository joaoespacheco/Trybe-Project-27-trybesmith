import { Request, Response } from 'express';
import UsersService from '../services/users.service';
import statusCodes from '../utils/statusCodes';

class UsersController {
  constructor(private usersService = new UsersService()) {}

  public create = async (req: Request, res: Response) => {
    const user = req.body;

    const userCreated = await this.usersService.create(user);
    res.status(statusCodes.CREATED).json({ token: userCreated });
  };
}

export default UsersController;