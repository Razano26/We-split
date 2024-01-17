import * as crypto from 'crypto';
import cors from 'cors';
import express from 'express';
import { expressjwt, Request as JWTRequest } from 'express-jwt';
import { sign } from 'jsonwebtoken';

const SECRET = 'secret';

const jwt = expressjwt({
	secret: SECRET,
	algorithms: ['HS256'],
}).unless({ path: ['/login','/register','/user'] });

const users = [
	{
		id: 1,
		email: 'admin@admin.com',
		password: 'admin',
	},
	{
		id: 2,
		email: 'llabeyrie@gmail.com',
		password: 'admin2',
	},
];

const app = express();

app.use(express.json());
app.use(jwt);
app.use(cors());
app.use(
	(
		err: Error,
		req: express.Request,
		res: express.Response,
		next: express.NextFunction
	): void => {
		if (err.name === 'UnauthorizedError') {
			res.status(401).send('invalid token...');
		} else {
			next(err);
		}
	}
);

const port = process.env.PORT || 8080;

app.post('/login', (req: JWTRequest, res: express.Response) => {
	const { email, password } = req.body;
	const user = req.auth;

	console.log('user', user);
	console.log('email', email);
	console.log('password', password);

	if (user) return res.status(200).json({ message: 'Already connect' });

	const userFound = users.find(
		(user) => user.email === email && user.password === password
	);

	if (userFound) {
		const token = sign(
			{ email: userFound.email, id: userFound.id },
			SECRET,
			{ expiresIn: '1h' }
		);
		return res.status(200).json({ token });
	} else {
		return res.status(401).json({ message: 'Invalid credentials' });
	}
});


app.post('/register', (req: JWTRequest, res: express.Response) => {

	console.log('req.body', req.body);

	const { email, password } = req.body;

	const userFound = users.find((user) => user.email === email);

	if (userFound) {
		return res.status(409).json({ message: 'User already exists' });
	} else {
		const newUser = {
			id: users.length + 1,
			email,
			password,
		};
		users.push(newUser);
		return res.status(201).json({ message: 'User created' });
	}
});

app.listen(port, () => {
	console.log(`Server listening on ${port}`);
});
