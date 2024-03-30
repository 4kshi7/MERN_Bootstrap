import express from "express";
import { bulk, signin, signup, update } from "../controllers/authControllers.js";
import { authMiddleware } from "../middleware/authMiddleware.js";
const router = express.Router();

router.post("/signup", signup);
router.post("/signin", signin);
router.put("/", authMiddleware, update)
router.get("/users",authMiddleware, bulk);

export default router;
