import { inject, injectable } from "tsyringe";
import { GetUserDataUseCase } from "../useCases/GetUserDataUseCase";
import { Request, Response } from "express"


@injectable()
export class GetUserDataController {


    constructor(@inject("GetUserDataUseCase") private useCase: GetUserDataUseCase){}

    async handle(req: Request, res:Response){
        const { userId } = req.body;

        try{
           const userData = await this.useCase.execute(userId);
            
            res.status(200).json(userData);
        }catch(err:any){
            res.status(400).json({error: err.message})
        }

    }
}