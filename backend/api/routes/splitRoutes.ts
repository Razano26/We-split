import { Router } from "express";
import { 
    getAllSplits, 
    getSplitById, 
 //   createSplit, 
 //   updateSplit, 
 //   deleteSplit
 } from "../controllers/splitController";

 const router = Router();

 router.get('/', getAllSplits);
 router.get('/:id', getSplitById);
 //router.post('/', createSplit);
 //router.put('/:id', updateSplit);
 //router.delete('/:id', deleteSplit);

 export default router;