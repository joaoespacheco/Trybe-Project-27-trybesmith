import { Router } from 'express';
import OrdersController from '../controllers/orders.controller';
import authMiddleware from '../middlewares/auth.middleware';

const router = Router();

const ordersController = new OrdersController();

router.get('/', ordersController.getAll.bind(ordersController));
router.post('/', authMiddleware, ordersController.create.bind(ordersController));

export default router;