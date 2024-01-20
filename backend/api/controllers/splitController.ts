import { Request, Response } from 'express';
import { PrismaClient, type Split } from '@prisma/client';

const prisma = new PrismaClient();

export const getAllSplits = async (req: Request, res: Response) => {
	const splits: Split[] = await prisma.split.findMany({
		include: { users: true, expenses: true },
	});
	if (splits.length === 0) {
		res.status(404).json({ message: 'No splits found' });
		return;
	} else {
		res.status(200).json(splits);
	}
};

export const getSplitById = async (req: Request, res: Response) => {
	const { id } = req.params;
	const split: Split | null = await prisma.split.findUnique({
		where: {
			id: Number(id),
		},
		include: { users: true },
	});
	if (!split) {
		res.status(404).json({ message: 'Split not found' });
		return;
	} else {
		res.status(200).json(split);
	}
};

export const createSplit = async (req: Request, res: Response) => {
	const { name, description, amount, currency, date, userId } = req.body;

	// check if all parameters are sent
	if (name === undefined) {
		res.status(400).json({ message: 'Missing parameters' });
		return;
	}

	// create split
	const newSplit = await prisma.split.create({
		data: {
			name,
		},
	});
	res.status(201).json({
		message: 'Split created',
		split: newSplit,
	});
};

export const updateSplit = async (req: Request, res: Response) => {
	const { id } = req.params;
	const { name } = req.body;

	const checkSplit = await prisma.split.findUnique({
		where: {
			id: Number(id),
		},
	});

	if (!checkSplit) {
		res.status(404).json({ message: 'Split not found' });
		return;
	}

	const split = await prisma.split.update({
		where: {
			id: Number(id),
		},
		data: {
			name,
		},
	});
	res.status(200).json({
		message: 'Split updated',
		split,
	});
};

export const deleteSplit = async (req: Request, res: Response) => {
	const { id } = req.params;

	const checkSplit = await prisma.split.findUnique({
		where: {
			id: Number(id),
		},
	});

	if (!checkSplit) {
		res.status(404).json({ message: 'Split not found' });
		return;
	}

	const split = await prisma.split.delete({
		where: {
			id: Number(id),
		},
	});
	res.status(200).json({
		message: 'Split deleted',
		split,
	});
};

export const addUserInSplit = async (req: Request, res: Response) => {
	const { id } = req.params;
	const { userId } = req.body;

	// check if user exists
	const user = await prisma.user.findUnique({
		where: {
			id: Number(userId),
		},
	});
	if (!user) {
		res.status(404).json({ message: 'User not found' });
		return;
	}

	// check if split exists
	const split = await prisma.split.findUnique({
		where: {
			id: Number(id),
		},
	});
	if (!split) {
		res.status(404).json({ message: 'Split not found' });
		return;
	}

	// check if user is already in split
	const userInSplit = await prisma.split.findUnique({
		where: {
			id: Number(id),
		},
		include: {
			users: true,
		},
	});
	if (userInSplit?.users.find((user) => user.id === Number(userId))) {
		res.status(400).json({ message: 'User already in split' });
		return;
	}

	// add user in split
	const Split = await prisma.split.update({
		where: {
			id: Number(id),
		},
		data: {
			users: {
				connect: {
					id: Number(userId),
				},
			},
		},
	});
	res.status(200).json({
		message: 'User added in split',
		userInSplit: Split,
	});
};

export const dellUserInSplit = async (req: Request, res: Response) => {
	const { id } = req.params;
	const { userId } = req.body;

	// check if user exists
	const user = await prisma.user.findUnique({
		where: {
			id: Number(userId),
		},
	});
	if (!user) {
		res.status(404).json({ message: 'User not found' });
		return;
	}

	// check if split exists
	const split = await prisma.split.findUnique({
		where: {
			id: Number(id),
		},
	});
	if (!split) {
		res.status(404).json({ message: 'Split not found' });
		return;
	}

	// check if user is in split
	const userInSplit = await prisma.split.findUnique({
		where: {
			id: Number(id),
		},
		include: {
			users: true,
		},
	});
	if (!userInSplit?.users.find((user) => user.id === Number(userId))) {
		res.status(400).json({ message: 'User not in split' });
		return;
	}

	// delete user in split
	const Split = await prisma.split.update({
		where: {
			id: Number(id),
		},
		data: {
			users: {
				disconnect: {
					id: Number(userId),
				},
			},
		},
	});
	res.status(200).json({
		message: 'User deleted in split',
		userInSplit: Split,
	});
};

export const getSplitExpenses = async (req: Request, res: Response) => {
	const { id } = req.params;
	const split = await prisma.split.findUnique({
		where: {
			id: Number(id),
		},
		include: {
			expenses: true,
		},
	});
	if (!split) {
		res.status(404).json({ message: 'Split not found' });
		return;
	}
	res.status(200).json(split.expenses);
};
