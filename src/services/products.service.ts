import ProductsModel from '../models/products.model';
import Product from '../interfaces/product.interface';

class ProductsService {
  public model: ProductsModel;

  constructor() {
    this.model = new ProductsModel();
  }

  public create(product: Product): Promise<Product> {
    return this.model.create(product);
  }

  public getAll(): Promise<Product[]> {
    return this.model.getAll();
  }
}

export default ProductsService;