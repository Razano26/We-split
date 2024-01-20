import { Router } from 'express';
import {
	getAllUsers,
	createUser,
	getUserById,
	updateUser,
	deleteUser,
	getSplitsByUser,
} from '../controllers/userController';

const router = Router();

router.get('/', getAllUsers);
router.get('/:id', getUserById);
router.post('/', createUser);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);
router.get('/:id/splits', getSplitsByUser);

export default router;
