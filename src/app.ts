import express from 'express';
import productsRoutes from './routes/products.routes';
import 'express-async-errors';

const app = express();

app.use(express.json());

app.use('/products', productsRoutes);

export default app;
