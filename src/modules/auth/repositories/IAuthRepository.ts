import { RegisterDTO } from "../dtos/RegisterDTO";
import { ResponseSignInDTO } from "../dtos/ResponseSignInDTO";
import { SignInDTO } from "../dtos/SignInDTO";
import { User } from "../entities/User";


export interface IAuthRepository {

    signIn(data:SignInDTO):Promise<ResponseSignInDTO>;
    signUp(data:RegisterDTO):Promise<void>;
    getUserData(id:string):Promise<User>;
    findByUsername(username:string):Promise<User|null>;

}