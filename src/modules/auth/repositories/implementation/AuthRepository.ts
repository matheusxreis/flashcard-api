import { RegisterDTO } from "../../dtos/RegisterDTO";
import { ResponseSignInDTO } from "../../dtos/ResponseSignInDTO";
import { SignInDTO } from "../../dtos/SignInDTO";
import { IAuthRepository } from "../IAuthRepository";
import { User, UserModel } from "../../entities/User"


export class AuthRepository implements IAuthRepository {
    
    signIn(data: SignInDTO): Promise<ResponseSignInDTO> {
        throw new Error("Method not implemented.");
    }
    
    async signUp(data: RegisterDTO): Promise<void> {
        
        console.log("ooi, repository", data)
        
        const user = new UserModel(data);
        console.log(user)
        try{
            await user.save();
        }catch(err){
            console.log(err)
        }
    }
    
   async findByUsername(username: string): Promise<User|null> {
      const user = await UserModel.findOne({username: username}).exec();
        
      if(user?.username && user?.createdAt){
         const userExist = new User(user!.username, String(user!._id), user!.createdAt)
         return userExist;
        }

      return null;
    }
}