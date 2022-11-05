import { ResultSetHeader } from 'mysql2';
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
}
