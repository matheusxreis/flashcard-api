import { sign } from "jsonwebtoken"

type TokenJWT = string

export async function GenerateJWT(content:string):Promise<TokenJWT>{


    const token = sign({},`${process.env.HASH_JWT}`, {
        subject:content,
        expiresIn: "1d"
    });

    return token;
}