import { Request, Response } from 'express';
import UsersService from '../services/users.service';
import { mapStatusCode } from '../utils/statusCodes';

class UsersController {
  constructor(private usersService = new UsersService()) {}

  public create = async (req: Request, res: Response) => {
    const user = req.body;

    const { type, value } = await this.usersService.create(user);
    res.status(mapStatusCode(type)).json({ ...value });
  };
}

export default UsersController;