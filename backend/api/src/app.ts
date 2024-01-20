import express, { Express } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import userRoutes from '../routes/userRoutes';
import splitRoutes from '../routes/splitRoutes';
import expenseRoutes from '../routes/expenseRoutes';
//import shareRoutes from './routes/shareRoutes';

const app: Express = express();

app.use(cors());
app.use(bodyParser.json());

app.use('/users', userRoutes);
app.use('/splits', splitRoutes);
app.use('/expenses', expenseRoutes);
//app.use('/shares', shareRoutes);

export default app;
