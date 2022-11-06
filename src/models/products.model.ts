import { ResultSetHeader, RowDataPacket } from 'mysql2';
import mysql from './connection';
import Product from '../interfaces/product.interface';

export default class ProductModel {
  private connection = mysql;

  public async create(product: Product): Promise<Product> {
    const { name, amount } = product;
    const [result] = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Products (name, amount) VALUES (?, ?)',
      [name, amount],
    );
    const { insertId } = result;
    return { id: insertId, ...product };
  }

  async getAll(): Promise<Product[]> {
    const [products] = await this.connection.execute<Product[] & RowDataPacket[]>(`
      SELECT
        id, name, amount, orderId 
      FROM Trybesmith.Products
    `);

    return products;
  }
}
