import { RowDataPacket } from 'mysql2';
import mysql from './connection';
import Order from '../interfaces/order.interface';

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
}