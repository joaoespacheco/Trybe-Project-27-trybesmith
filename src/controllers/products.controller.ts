import { Request, Response } from 'express';
import ProductsService from '../services/products.service';
import statusCodes from '../utils/statusCodes';

class ProductsController {
  constructor(private productsService = new ProductsService()) {}

  public create = async (req: Request, res: Response) => {
    const product = req.body;

    const productCreated = await this.productsService.create(product);
    res.status(statusCodes.CREATED).json(productCreated);
  };
}

export default ProductsController;