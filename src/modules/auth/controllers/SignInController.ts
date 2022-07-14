import { inject, injectable } from "tsyringe";
import { SignInUseCase } from "../useCases/SignInUseCase";
import { Request, Response } from "express"


@injectable()
export class SignInController {
    constructor(@inject("SignInUseCase") private useCase:SignInUseCase){}

    async handle(req: Request, res:Response){

        const { username, password } = req.body

        try{
        const data = await this.useCase.execute({username, password});

        res.status(200).json(data);

        }catch(err:any){
        
            res.status(400).json({error: err.message}) 
        }

    }
}