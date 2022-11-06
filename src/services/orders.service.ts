import OrdersModel from '../models/orders.model';
import Order from '../interfaces/order.interface';

class OrdersService {
  public model: OrdersModel;

  constructor() {
    this.model = new OrdersModel();
  }

  public getAll(): Promise<Order[]> {
    return this.model.getAll();
  }
}

export default OrdersService;