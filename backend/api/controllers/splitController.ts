import { Request, Response } from 'express';
import { PrismaClient, type Split } from '@prisma/client';

const prisma = new PrismaClient();

export const getAllSplits = async (req: Request, res: Response) => {
	const splits: Split[] = await prisma.split.findMany();
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
        }
    });
    if (!split) {
        res.status(404).json({ message: 'Split not found' });
        return;
    } else {
        res.status(200).json(split);
    }
};

// router.get('/', getAllSplits);
// router.get('/:id', getSplitById);
// router.post('/', createSplit);
// router.put('/:id', updateSplit);
// router.delete('/:id', deleteSplit);