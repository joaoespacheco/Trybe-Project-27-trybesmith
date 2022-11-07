import ProductsModel from '../models/products.model';
import Product from '../interfaces/product.interface';
import validateReturn from '../interfaces/validateReturn.interface';
import { validateProduct } from './validations/validationsInputsValues';

class ProductsService {
  public model: ProductsModel;

  constructor() {
    this.model = new ProductsModel();
  }

  public async create(product: Product): Promise<validateReturn> {
    const validateBody = validateProduct(product);
    const { type, value } = validateBody;
    if (type !== 'OK') return { type, value };

    const newProduct = await this.model.create(product);
    
    return { type: 'OK', value: { ...newProduct } };
  }

  public getAll(): Promise<Product[]> {
    return this.model.getAll();
  }
}

export default ProductsService;