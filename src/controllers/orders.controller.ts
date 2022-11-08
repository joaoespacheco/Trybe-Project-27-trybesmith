import { Request, Response } from 'express';
import OrdersService from '../services/orders.service';
import { mapStatusCode } from '../utils/statusCodes';

class OrdersController {
  constructor(private ordersService = new OrdersService()) {}

  public getAll = async (_req: Request, res: Response) => {
    const ordersList = await this.ordersService.getAll();
    res.status(mapStatusCode('OK')).json(ordersList);
  };

  public create = async (req: Request, res: Response) => {
    const { productsIds, user } = req.body;
    const { type, value } = await this.ordersService.create(productsIds, user.id);
    res.status(mapStatusCode(type)).json({ ...value });
  };
}

export default OrdersController;