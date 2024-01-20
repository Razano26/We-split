import { Request, Response } from 'express';
import { PrismaClient, type Share } from '@prisma/client';

const prisma = new PrismaClient();

export const getAllShares = async (req: Request, res: Response) => {
	const shares: Share[] = await prisma.share.findMany();
	if (shares.length === 0) {
		res.status(404).json({ message: 'No shares found' });
		return;
	} else {
		res.status(200).json(shares);
	}
};

export const getShareById = async (req: Request, res: Response) => {
	const { id } = req.params;
	const share: Share | null = await prisma.share.findUnique({
		where: {
			id: Number(id),
		},
	});
	if (!share) {
		res.status(404).json({ message: 'Share not found' });
		return;
	} else {
		res.status(200).json(share);
	}
};

export const createShare = async (req: Request, res: Response) => {
	const { userId, expenseId, percent } = req.body;

	// check if all parameters are sent
	if (
		userId === undefined ||
		expenseId === undefined ||
		percent === undefined
	) {
		res.status(400).json({ message: 'Missing parameters' });
		return;
	}

	// create Share
	const newShare = await prisma.share.create({
		data: {
            percent,
            user: {
                connect: {
                    id: Number(userId),
                },
            },
            expense: {
                connect: {
                    id: Number(expenseId),
                },
            },
		},
	});
	res.status(201).json({
		message: 'Share created',
		split: newShare,
	});
};

export const deleteShare = async (req: Request, res: Response) => {
    const { id } = req.params;

    const checkShare = await prisma.share.findUnique({
        where: {
            id: Number(id),
        },
    });

    if (!checkShare) {
        res.status(404).json({ message: 'Share not found' });
        return;
    }

    await prisma.share.delete({
        where: {
            id: Number(id),
        },
    });
    res.status(200).json({ message: 'Share deleted' });
};

export const updateShare = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { percent } = req.body;

    const checkShare = await prisma.share.findUnique({
        where: {
            id: Number(id),
        },
    });

    if (!checkShare) {
        res.status(404).json({ message: 'Share not found' });
        return;
    }

    const share = await prisma.share.update({
        where: {
            id: Number(id),
        },
        data: {
            percent,
        },
    });
    res.status(200).json({
        message: 'Share updated',
        split: share,
    });
};

