import express, { Express } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import userRoutes from '../routes/userRoutes';
import splitRoutes from '../routes/splitRoutes';
import expenseRoutes from '../routes/expenseRoutes';
import shareRoutes from '../routes/shareRoutes';
import authRoutes from '../routes/authRoutes';
import { expressjwt } from 'express-jwt';

const SECRET = 'secret';

const jwt = expressjwt({
	secret: SECRET,
	algorithms: ['HS256'],
}).unless({ path: ['/login', '/register'] });

const app: Express = express();

app.use(jwt);
app.use(cors());

app.use(bodyParser.json());

app.use('/users', userRoutes);
app.use('/splits', splitRoutes);
app.use('/expenses', expenseRoutes);
app.use('/shares', shareRoutes);
app.use(authRoutes);

export default app;
