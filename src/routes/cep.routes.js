import { Router } from "express";
import { getCep } from "../controllers/cep.controller.js";

const router = Router();

router.get("/ceps/:cep", getCep);

export default router;