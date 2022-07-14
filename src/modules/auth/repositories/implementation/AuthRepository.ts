import { RegisterDTO } from "../../dtos/RegisterDTO";
import { ResponseSignInDTO } from "../../dtos/ResponseSignInDTO";
import { SignInDTO } from "../../dtos/SignInDTO";
import { IAuthRepository } from "../IAuthRepository";
import { User, UserModel } from "../../entities/User"
import { Compare } from "../../utils/encrypt";
import { GenerateJWT } from "../../utils/jwt";


export class AuthRepository implements IAuthRepository {
    
    async signIn(data: SignInDTO): Promise<ResponseSignInDTO> {

        const user = await UserModel.findOne({username: data.username}).exec();

        if(!user){
            throw new Error("Password or username is wrong.")
        }

        if(user.password){
        const passwordIsRight = await Compare(user!.password, data.password)

        if(!passwordIsRight ) throw new Error("Password or username is wrong.");

        const token = await GenerateJWT(String(user._id))

        const userData = {
            username: String(user.username),
            id: String(user._id)
        }
        return {
            timestamp: new Date().getTime(),
            user: userData,
            token
        }

        
        }

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

    async findById(id:string): Promise<User|null> {

        const user = await UserModel.findById(id);

         if(user?.username && user?.createdAt){
         const userExist = new User(user!.username, String(user!._id), user!.createdAt)
         return userExist;
        }

        return null
    }
}