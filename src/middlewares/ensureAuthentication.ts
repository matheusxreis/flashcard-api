import { Request, Response, NextFunction } from "express";
import { AuthRepository } from "../modules/auth/repositories/implementation/AuthRepository";
import { VerifyJWT } from "../modules/auth/utils/jwt";


export interface MyReq extends Request {
    userId?: string;
}

export async function ensureAuthentication(
    req: MyReq, 
    res: Response, 
    next: NextFunction
){

    const authRepository = new AuthRepository();
    const bearerToken = req.headers.authorization;

    if(!bearerToken){
    return res.status(401).json({error:"Not authorized"})
    }
    
    const jwt = await VerifyJWT(bearerToken)

    if(!jwt.isRight){
    return res.status(401).json({error:"Not authorized"})
    }

    const user = await authRepository.findById(jwt.sub)

    if(!user){
        return res.status(401).json({error:"Not authorized"})

    }
    
    req.userId = user.id;
    next();
}