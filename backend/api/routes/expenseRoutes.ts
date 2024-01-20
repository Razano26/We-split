import { Router } from 'express';
import {
	getAllExpenses,
	getExpenseById,
	createExpense,
	updateExpenseAmout,
	updateExpenseTitle,
	deleteExpense,
} from '../controllers/expenseController';

const router = Router();

router.get('/', getAllExpenses);
router.get('/:id', getExpenseById);
router.post('/', createExpense);
router.patch('/:id/amount', updateExpenseAmout);
router.patch('/:id/title', updateExpenseTitle);
router.delete('/:id', deleteExpense);

export default router;
