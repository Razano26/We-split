import { Router } from 'express';
import {
	getAllSplits,
	getSplitById,
	createSplit,
	updateSplit,
	deleteSplit,
	addUserInSplit,
	dellUserInSplit,
	getSplitExpenses,
} from '../controllers/splitController';

const router = Router();

router.get('/', getAllSplits);
router.get('/:id', getSplitById);
router.post('/', createSplit);
router.put('/:id', updateSplit);
router.delete('/:id', deleteSplit);
router.patch('/:id/user', addUserInSplit);
router.delete('/:id/user', dellUserInSplit);
router.get('/:id/expenses', getSplitExpenses);

export default router;
