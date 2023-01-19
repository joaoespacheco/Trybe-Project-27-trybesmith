import express from 'express';
import 'express-async-errors';
import swaggerUi from 'swagger-ui-express';
import httpErrorMiddleware from './middlewares/http.error.middleware';
import productsRoutes from './routes/products.routes';
import usersRoutes from './routes/users.routes';
import ordersRoutes from './routes/orders.routes';
import loginRoutes from './routes/login.routes';
import swaggerDocument from './swagger.json';

const app = express();

app.use(express.json());

app.use('/products', productsRoutes);
app.use('/users', usersRoutes);
app.use('/orders', ordersRoutes);
app.use('/login', loginRoutes);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use(httpErrorMiddleware);

export default app;
