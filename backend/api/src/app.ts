import express, { Express } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import userRoutes from '../routes/userRoutes';
import splitRoutes from '../routes/splitRoutes';
import expenseRoutes from '../routes/expenseRoutes';
import shareRoutes from '../routes/shareRoutes';
import authRoutes from '../routes/authRoutes';
import { expressjwt } from 'express-jwt';
import { pinoHttp } from 'pino-http';

const SECRET = 'secret';

const jwt = expressjwt({
	secret: SECRET,
	algorithms: ['HS256'],
}).unless({ path: ['/login', '/register', '/'] });

const app: Express = express();

app.use(
	pinoHttp({
		base: null,
		formatters: {
			level: (label: string) => ({ level: label }),
		},
		redact: {
			paths: ['req.headers.authorization', 'req.headers.cookie'],
		},
	})
);
app.use(jwt);
app.use(cors());
app.use(bodyParser.json());

app.use('/users', userRoutes);
app.use('/splits', splitRoutes);
app.use('/expenses', expenseRoutes);
app.use('/shares', shareRoutes);
app.use(authRoutes);
app.get('/', (req, res) => {
	res.send('Welcome to the WeSplit API');
}
);

//app.use(function (err, req, res, next) {
//	if (err.name === 'UnauthorizedError') {
//		res.status(401).send('invalid token...');
//	} else {
//		next(err);
//	}
//});

export default app;
