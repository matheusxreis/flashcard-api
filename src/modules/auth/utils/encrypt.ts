import { hash, compare } from "bcrypt";


export async function Encrypt(value:string):Promise<string>{
    return await hash(value, 8);
}

export async function Compare(encryptValue:string, value:string): Promise<boolean>{
    return await compare(encryptValue, value)
}