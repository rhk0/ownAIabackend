import express from "express";
import { listUsers, getUserDetails } from "../controllers/userController";
import { authenticate } from "../middleware/authMiddleware";

const router = express.Router();

router.get("/", authenticate, listUsers);
router.get("/:id", authenticate, getUserDetails);

export default router;
