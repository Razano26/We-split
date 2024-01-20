import { Router } from "express";
import {
    getAllShares,
    getShareById,
    createShare,
    updateShare,
    deleteShare,
    } from "../controllers/shareController";

const router = Router();

router.get("/", getAllShares);
router.get("/:id", getShareById);
router.post("/", createShare);
router.patch("/:id", updateShare);
router.delete("/:id", deleteShare);

export default router;