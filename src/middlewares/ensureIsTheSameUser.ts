import { NextFunction, Response, Request} from "express";
import { VerifyJWT } from "../modules/auth/utils/jwt";
import { MyReq } from "./ensureAuthentication";



export async function ensureIsTheSameUser(
    req: MyReq,
    res: Response,
    next:NextFunction
){

    const userIdToken = req.userId;
    const { userId } = req.body

    console.log(userIdToken, userId)
    if(!userIdToken) {  return res.status(400).json({error: "Not authorized!"}) }
    if(!userId) {  return res.status(400).json({error: "Not authorized!"}) }


    if(userId === userIdToken){
        next()
    }else {
       return res.status(400).json({error: "Not authorized!"})
    }

}