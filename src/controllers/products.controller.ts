import { Request, Response } from 'express';
import ProductsService from '../services/products.service';
import { mapStatusCode } from '../utils/statusCodes';

class ProductsController {
  constructor(private productsService = new ProductsService()) {}

  public create = async (req: Request, res: Response) => {
    const product = req.body;

    const { type, value } = await this.productsService.create(product);
    res.status(mapStatusCode(type)).json({ ...value });
  };

  public getAll = async (_req: Request, res: Response) => {
    const productCreated = await this.productsService.getAll();
    res.status(mapStatusCode('OK')).json(productCreated);
  };
}

export default ProductsController;