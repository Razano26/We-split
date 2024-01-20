import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const getAllUsers = async (req: Request, res: Response) => {
	const users = await prisma.user.findMany();
	res.json(users);
};

export const createUser = async (req: Request, res: Response) => {
    console.log(req.body);
	const { email, name, password } = req.body;
	const newUser = await prisma.user.create({
		data: {
			email,
			name,
			password,
		},
	});
	res.json(newUser);
};
