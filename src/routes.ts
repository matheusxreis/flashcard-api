import { Router } from "express";
import { authRoutes } from "./modules/auth/routes/auth.routes";


const router = Router();


router.use("/auth", authRoutes);


export { router }