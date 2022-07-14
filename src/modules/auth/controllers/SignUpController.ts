import { SignUpUseCase } from "../useCases/SignUpUseCase";
import { Request, Response } from "express"
import { inject, injectable } from "tsyringe";

@injectable()
export class SignUpController {


    constructor(@inject("SignUpUseCase") private useCase: SignUpUseCase){}

    async handle(req: Request, res:Response){
        console.log(this.useCase)
        const {username, password} = req.body

        try{
            
            await this.useCase.execute(username, password);
            res.status(201).send();
        }catch(err:any){
           // console.log(err)
            res.status(400).json({error: err.message});
        }

    }

}