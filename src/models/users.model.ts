import { ResultSetHeader, RowDataPacket } from 'mysql2';
import mysql from './connection';
import { ILogin, IUser } from '../interfaces/user.interface';
import CreateDb from '../interfaces/createDb.interface';

export default class UserModel {
  private connection = mysql;

  public async getUserById(id: number): Promise<IUser[]> {
    const [rows] = await this.connection.execute<(
    IUser[] & RowDataPacket[])>(
      'SELECT * FROM Trybesmith.Users WHERE id=?',
      [id],
      );

    return rows;
  }

  public async getUserByUsernameAndPassword(userLogin: ILogin): Promise<IUser> {
    const { username, password } = userLogin;
    const [rows] = await this.connection.execute<(
    IUser[] & RowDataPacket[])>(
      'SELECT * FROM Trybesmith.Users WHERE username=? AND password=?',
      [username, password],
      );
    return rows[0];
  }

  public async create(user: IUser): Promise<CreateDb> {
    const { username, classe, level, password } = user;
    const [result] = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Users (username, classe, level, password) VALUES (?, ?, ?, ?)',
      [username, classe, level, password],
    );
    const { affectedRows, insertId } = result;
    return { affectedRows, insertId };
  }
}