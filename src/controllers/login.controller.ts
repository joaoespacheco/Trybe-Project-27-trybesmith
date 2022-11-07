import { Request, Response } from 'express';
import LoginService from '../services/login.service';
import { mapStatusCode } from '../utils/statusCodes';

class LoginController {
  constructor(private loginService = new LoginService()) {}

  public login = async (req: Request, res: Response) => {
    const userLogin = req.body;

    const { type, value } = await this.loginService.login(userLogin);
    res.status(mapStatusCode(type)).json({ ...value });
  };
}

export default LoginController;