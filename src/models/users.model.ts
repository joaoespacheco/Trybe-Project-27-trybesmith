import { ResultSetHeader, RowDataPacket } from 'mysql2';
import mysql from './connection';
import User from '../interfaces/user.interface';
import CreateDb from '../interfaces/createDb.interface';

export default class UserModel {
  private connection = mysql;

  public async getUserById(id: number): Promise<User[]> {
    const [rows] = await this.connection.execute<(
    User[] & RowDataPacket[])>(
      'SELECT * FROM Trybesmith.Users WHERE id=?',
      [id],
      );

    return rows;
  }

  public async create(user: User): Promise<CreateDb> {
    const { username, classe, level, password } = user;
    const [result] = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Users (username, classe, level, password) VALUES (?, ?, ?, ?)',
      [username, classe, level, password],
    );
    const { affectedRows, insertId } = result;
    return { affectedRows, insertId };
  }
}