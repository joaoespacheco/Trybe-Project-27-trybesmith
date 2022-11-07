import { Request, Response } from 'express';
import ProductsService from '../services/products.service';
import { mapStatusCode } from '../utils/statusCodes';

class ProductsController {
  constructor(private productsService = new ProductsService()) {}

  public create = async (req: Request, res: Response) => {
    const product = req.body;

    const productCreated = await this.productsService.create(product);
    res.status(mapStatusCode('CREATED')).json(productCreated);
  };

  public getAll = async (_req: Request, res: Response) => {
    const productCreated = await this.productsService.getAll();
    res.status(mapStatusCode('OK')).json(productCreated);
  };
}

export default ProductsController;