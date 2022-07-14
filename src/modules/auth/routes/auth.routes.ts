import { Router } from "express";
import { container } from "tsyringe";
import { SignInController } from "../controllers/SignInController";
import { SignUpController } from "../controllers/SignUpController";


const authRoutes = Router();

const signUpController = container.resolve(SignUpController);
const signInController = container.resolve(SignInController)

authRoutes.post("/register", (req, res) => signUpController.handle(req, res));
authRoutes.post("/", (req, res)=> signInController.handle(req, res));

export { authRoutes }