import { Request, Response } from 'express';
import { PrismaClient, type User } from '@prisma/client';

const prisma = new PrismaClient();

export const getAllUsers = async (req: Request, res: Response) => {
	const users: User[] = await prisma.user.findMany();
	if (users.length === 0) {
		res.status(404).json({ message: 'No users found' });
	} else {
		res.status(200).json(users);
	}
};

export const getUserById = async (req: Request, res: Response) => {
	const { id } = req.params;
	const user = await prisma.user.findUnique({
		where: {
			id: Number(id),
		},
	});
	if (user === null) {
		res.status(404).json({ message: 'User not found' });
	} else {
		res.status(200).json(user);
	}
};

export const createUser = async (req: Request, res: Response) => {
	const { email, name, surname, pseudo, password } = req.body;

	// check if all parameters are sent
	if (
		email === undefined ||
		name === undefined ||
		surname === undefined ||
		pseudo === undefined ||
		password === undefined
	) {
		res.status(400).json({ message: 'Missing parameters' });
		return;
	}

	// check if user already exists
	const user = await prisma.user.findUnique({
		where: {
			email,
		},
	});
	if (user !== null) {
		res.status(400).json({ message: 'User already exists' });
		return;
	}

	// create user
	const newUser = await prisma.user.create({
		data: {
			email,
			name,
			surname,
			pseudo,
			password,
		},
	});
	if (newUser === null) {
		res.status(404).json({ message: 'User not created' });
	} else {
		res.status(200).json({
			message: 'User created',
			user: newUser,
		});
	}
};

export const updateUser = async (req: Request, res: Response) => {
	const { id } = req.params;
	const { email, name, surname, pseudo, password } = req.body;
	const user = await prisma.user.update({
		where: {
			id: Number(id),
		},
		data: {
			email,
			name,
			surname,
			pseudo,
			password,
		},
	});
	res.status(200).json({
		message: 'User updated',
		user,
	});
};

export const deleteUser = async (req: Request, res: Response) => {
	const { id } = req.params;

	// check if user exists
	const user = await prisma.user.findUnique({
		where: {
			id: Number(id),
		},
	});

	if (!user) {
		res.status(404).json({ message: 'User not found' });
		return;
	} else {
		const user = await prisma.user.delete({
			where: {
				id: Number(id),
			},
		});
		res.status(200).json({
			message: 'User deleted',
			user: user,
		});
	}
};

export const getSplitsByUser = async (req: Request, res: Response) => {
	const { id } = req.params;

	// check if user exists
	const user = await prisma.user.findUnique({
		where: {
			id: Number(id),
		},
	});

	if (!user) {
		res.status(404).json({ message: 'User not found' });
		return;
	}

	const splits = await prisma.split.findMany({
		where: {
			users: {
				some: {
					id: Number(id),
				},
			},
		},
		include: {
			expenses: true,
			users: true,
		}
	});
	res.status(200).json({
		message: 'User splits',
		splits,
	});
};
