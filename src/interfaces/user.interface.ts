interface ILogin {
  username: string;
  password?: string;
}

interface IUser extends ILogin {
  id?: number;
  classe: string;
  level: number;
}

export {
  ILogin,
  IUser,
};