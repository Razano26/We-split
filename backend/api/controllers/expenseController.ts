import { Request, Response } from 'express';
import { PrismaClient, type Expense } from '@prisma/client';

const prisma = new PrismaClient();

export const getAllExpenses = async (req: Request, res: Response) => {
	const expenses: Expense[] = await prisma.expense.findMany({
		include: { shares: true },
	});
	if (expenses.length === 0) {
		res.status(404).json({ message: 'No expenses found' });
		return;
	} else {
		res.status(200).json(expenses);
	}
};

export const getExpenseById = async (req: Request, res: Response) => {
	const { id } = req.params;
	const expense: Expense | null = await prisma.expense.findUnique({
		where: {
			id: Number(id),
		},
	});
	if (!expense) {
		res.status(404).json({ message: 'Expense not found' });
		return;
	} else {
		res.status(200).json(expense);
	}
};

export const createExpense = async (req: Request, res: Response) => {
	const { title, amount, paidBy, groupId } = req.body;

	// check if all parameters are sent
	if (
		title === undefined ||
		amount === undefined ||
		paidBy === undefined ||
		groupId === undefined
	) {
		res.status(400).json({ message: 'Missing parameters' });
		return;
	}

	// check if paidBy is a user in the group
	const userInSplit = await prisma.split.findUnique({
		where: {
			id: Number(paidBy),
		},
		include: {
			users: true,
		},
	});
	if (userInSplit?.users.find((user) => user.id !== Number(paidBy))) {
		res.status(400).json({ message: 'User is not in split' });
		return;
	}

	// create expense
	const newExpense = await prisma.expense.create({
		data: {
			title,
			amount: Number(amount),
			paidBy: Number(paidBy),
			groupId: Number(groupId),
		},
	});
	res.status(201).json({
		message: 'Expense created',
		expense: newExpense,
	});
};

export const updateExpenseAmout = async (req: Request, res: Response) => {
	const { id } = req.params;
	const { amount } = req.body;

	const checkExpense = await prisma.expense.findUnique({
		where: {
			id: Number(id),
		},
	});

	if (!checkExpense) {
		res.status(404).json({ message: 'Expense not found' });
		return;
	}

	const expense = await prisma.expense.update({
		where: {
			id: Number(id),
		},
		data: {
			amount,
		},
	});
	res.status(200).json({
		message: 'Expense updated',
		expense,
	});
};

export const updateExpenseTitle = async (req: Request, res: Response) => {
	const { id } = req.params;
	const { title } = req.body;

	const checkExpense = await prisma.expense.findUnique({
		where: {
			id: Number(id),
		},
	});

	if (!checkExpense) {
		res.status(404).json({ message: 'Expense not found' });
		return;
	}

	const expense = await prisma.expense.update({
		where: {
			id: Number(id),
		},
		data: {
			title,
		},
	});
	res.status(200).json({
		message: 'Expense updated',
		expense,
	});
};

export const deleteExpense = async (req: Request, res: Response) => {
	const { id } = req.params;

	const checkExpense = await prisma.expense.findUnique({
		where: {
			id: Number(id),
		},
	});

	if (!checkExpense) {
		res.status(404).json({ message: 'Expense not found' });
		return;
	}

	const expense = await prisma.expense.delete({
		where: {
			id: Number(id),
		},
	});
	res.status(200).json({
		message: 'Expense deleted',
		expense,
	});
};
