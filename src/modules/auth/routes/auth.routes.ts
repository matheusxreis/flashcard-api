import { Router } from "express";
import { container } from "tsyringe";
import { SignUpController } from "../controllers/SignUpController";


const authRoutes = Router();

const signUpController = container.resolve(SignUpController);

authRoutes.post("/register", (req, res) => signUpController.handle(req, res));


export { authRoutes }