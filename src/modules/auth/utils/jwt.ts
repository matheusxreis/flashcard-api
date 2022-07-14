import { sign, verify } from "jsonwebtoken"

type TokenJWT = string

interface VerifyReturn {
    isRight:boolean,
    sub:string,
}

export async function GenerateJWT(content:string):Promise<TokenJWT>{


    const token = sign({},`${process.env.HASH_JWT}`, {
        subject:content,
        expiresIn: "1d"
    });

    return token;
}


export async function VerifyJWT(bearerToken:string):Promise<VerifyReturn>{
    //Bearar 81hjw17j2k912k21j2182j1kh2
    const [,token] = bearerToken.split(" ");

    try{
        //sub is user id
     const { sub } = await verify(
         token,
         `${process.env.HASH_JWT}`)

    console.log(sub, "JSON WEB TOKEN")

        return {
            isRight: true, 
            sub: String(sub)
        }
     }catch(err){

        return {
            isRight:false,
            sub:""
        }
     }
}