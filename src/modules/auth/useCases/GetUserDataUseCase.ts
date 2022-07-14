import { inject, injectable } from "tsyringe";
import { IAuthRepository } from "../repositories/IAuthRepository";


@injectable()
export class GetUserDataUseCase {

    constructor(@inject("AuthRepository") private repository: IAuthRepository){}

   async execute(id: string){

        if(!id) { throw new Error("Id field is empty")}
        
     
       return await this.repository.getUserData(id);
        
   }

}