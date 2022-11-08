import { ResultSetHeader, RowDataPacket } from 'mysql2';
import mysql from './connection';
import Order from '../interfaces/order.interface';
import CreateDb from '../interfaces/createDb.interface';

export default class ProductModel {
  private connection = mysql;

  async getAll(): Promise<Order[]> {
    const [products] = await this.connection.execute<Order[] & RowDataPacket[]>(`
    SELECT
    t1.id, t1.userId, JSON_ARRAYAGG(t2.id) as productsIds
    FROM Trybesmith.Orders AS t1
    INNER JOIN Trybesmith.Products AS t2
    ON t2.orderId = t1.id
    GROUP BY t1.id;
  `);

    return products;
  }

  async getById(orderId: number): Promise<Order[]> {
    const [orders] = await this.connection.execute<Order[] & RowDataPacket[]>(
      `SELECT
      t1.userId, JSON_ARRAYAGG(t2.id) as productsIds
      FROM Trybesmith.Orders AS t1
      INNER JOIN Trybesmith.Products AS t2
      ON t2.orderId = t1.id 
      WHERE t1.id = ?
      GROUP BY t1.userId;`,
      [orderId],
    );

    return orders;
  }

  public async create(userId: number): Promise<CreateDb> {
    const [result] = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Orders(userId) VALUES (?)',
      [userId],
    );
    const { insertId } = result;
    return { insertId };
  }
}