import express from 'express';
const router = express.Router();
import { claimPoints, getLeaderboard } from "../controllers/claimController.js";

router.post("/", claimPoints);
router.get("/leaderboard", getLeaderboard);

export default router;