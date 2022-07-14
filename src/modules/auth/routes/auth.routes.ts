import { Router } from "express";
import { container } from "tsyringe";
import { ensureAuthentication } from "../../../middlewares/ensureAuthentication";
import { ensureIsTheSameUser } from "../../../middlewares/ensureIsTheSameUser";
import { GetUserDataController } from "../controllers/GetUserDataController";
import { SignInController } from "../controllers/SignInController";
import { SignUpController } from "../controllers/SignUpController";
import { VerifyJWT } from "../utils/jwt";


const authRoutes = Router();

const signUpController = container.resolve(SignUpController);
const signInController = container.resolve(SignInController);
const getUserDataControler = container.resolve(GetUserDataController);

    authRoutes.post("/register", (req, res) => signUpController.handle(req, res));
   
    authRoutes.post("/", (req, res)=> signInController.handle(req, res));
   
    authRoutes.get("/user",
    ensureAuthentication, 
    ensureIsTheSameUser, 
    (req, res)=> getUserDataControler.handle(req, res))

export { authRoutes }