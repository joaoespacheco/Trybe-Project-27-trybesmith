import OrdersModel from '../models/orders.model';
import ProductsModel from '../models/products.model';
import Order from '../interfaces/order.interface';
import validateReturn from '../interfaces/validateReturn.interface';
import { validateOrder } from './validations/validationsInputsValues';

class OrdersService {
  public model: OrdersModel;

  public productsModel = new ProductsModel();

  constructor() {
    this.model = new OrdersModel();
  }

  public getAll(): Promise<Order[]> {
    return this.model.getAll();
  }

  public async create(productsIds: number[], userId: number): Promise<validateReturn> {
    const validateBody = validateOrder({ productsIds });
    const { type, value } = validateBody;
    if (type !== 'OK') return { type, value };

    const { insertId } = await this.model.create(userId);

    const productUpdated = productsIds.map(async (productId) => {
      await this.productsModel.update(productId, insertId);
    });

    await Promise.all(productUpdated);
    
    const [newOrder] = await this.model.getById(insertId);

    return { type: 'CREATED', value: newOrder };
  }
}

export default OrdersService;