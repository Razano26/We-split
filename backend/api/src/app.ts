import express, { Express } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import userRoutes from '../routes/userRoutes';
//import groupRoutes from './routes/groupRoutes';
//import expenseRoutes from './routes/expenseRoutes';
//import shareRoutes from './routes/shareRoutes';

const app: Express = express();

app.use(cors());
app.use(bodyParser.json());

app.use('/users', userRoutes);
//app.use('/groups', groupRoutes);
//app.use('/expenses', expenseRoutes);
//app.use('/shares', shareRoutes);

export default app;
