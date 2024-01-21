import { Request, Response } from 'express';
import { PrismaClient, type User } from '@prisma/client';
import { expressjwt, Request as JWTRequest } from 'express-jwt';
import { sign } from 'jsonwebtoken';

const prisma = new PrismaClient();

const SECRET = 'secret';

const jwt = expressjwt({
	secret: SECRET,
	algorithms: ['HS256'],
}).unless({ path: ['/login', '/register', '/user'] });

export const login = async (req: JWTRequest, res: Response) => {
	const { email, password } = req.body;

	const user = await prisma.user.findUnique({
		where: {
			email,
            password,
		},
	});

	if (user) {
		const token = sign({ email: user.email, id: user.id }, SECRET, {
			expiresIn: '24h',
		});
		return res.status(200).json({ token });
	} else {
		return res.status(401).json({ message: 'Invalid credentials' });
	}
};

export const register = async (req: Request, res: Response) => {
	const { email, password, name } = req.body;

	// check if all parameters are sent
    if (email === undefined || password === undefined || name === undefined) {
        return res.status(400).json({ message: 'Missing parameters' });
    }

    // check if user already exists
    const userFound = await prisma.user.findUnique({
        where: {
            email,
        },
    });

    if (userFound) {
        return res.status(409).json({ message: 'User already exists' });
    } else {
        const newUser = {
            name,
            email,
            password,
        };
        await prisma.user.create({
            data: newUser,
        });

        return res.status(201).json({ message: 'User created' });
    }
};
