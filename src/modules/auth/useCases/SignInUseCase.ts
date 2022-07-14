import { inject, injectable } from "tsyringe";
import { ResponseSignInDTO } from "../dtos/ResponseSignInDTO";
import { SignInDTO } from "../dtos/SignInDTO";
import { IAuthRepository } from "../repositories/IAuthRepository";


@injectable()
export class SignInUseCase {


    constructor(@inject("AuthRepository") private repository: IAuthRepository){}

    async execute(data:SignInDTO):Promise<ResponseSignInDTO>{
            return await this.repository.signIn(data)
    }
}