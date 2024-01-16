import * as crypto from 'crypto';
import express from 'express';
import { expressjwt, Request as JWTRequest } from 'express-jwt';
import { sign } from 'jsonwebtoken';

const SECRET = 'secret';

const jwt = expressjwt({
	secret: SECRET,
	algorithms: ['HS256'],
}).unless({ path: ['/login'] });

const users = [
	{
		id: 1,
		username: 'admin',
		password: 'admin',
	},
	{
		id: 2,
		username: 'llabeyrie',
		password: 'admin2',
	},
];

const app = express();

app.use(express.json());
app.use(jwt);
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

app.get('/login', (req: JWTRequest, res: express.Response) => {
	const { username, password } = req.query;
	const user = req.auth;

	console.log('user', user);

	if (user) return res.status(200).json({ message: 'Already connect' });

	const userFound = users.find(
		(user) => user.username === username && user.password === password
	);

	if (userFound) {
		const token = sign(
			{ username: userFound.username, id: userFound.id },
			SECRET,
			{ expiresIn: '1h' }
		);
		return res.status(200).json({ message: 'Login successful', token });
	} else {
		return res.status(401).json({ message: 'Invalid credentials' });
	}
});

app.get('/logout', (req: JWTRequest, res: express.Response) => {
	const user = req.cookies.sessionId;
	console.log('User: ', user);
	if (user) {
		return res.status(200).json({ message: 'Logout successful' });
	} else {
		return res.status(401).json({ message: 'Error user not log' });
	}
});

app.listen(port, () => {
	console.log(`Server listening on ${port}`);
});
