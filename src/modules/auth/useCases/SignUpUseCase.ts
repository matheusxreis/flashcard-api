import { inject, injectable } from "tsyringe";
import { IAuthRepository } from "../repositories/IAuthRepository";
import { Encrypt } from "../utils/encrypt";


@injectable()
export class SignUpUseCase {

    constructor(@inject("AuthRepository") private repository: IAuthRepository){}

    async execute(username:string, password:string){
        
        const newUser = {
            username,
            password: await Encrypt(password),
            createdAt: new Date().getTime(),
        };

        const userAlreadExist = await this.repository.findByUsername(username);

        if(userAlreadExist){
            throw new Error("User already exist.")
        }

        await this.repository.signUp(newUser)

    }


}