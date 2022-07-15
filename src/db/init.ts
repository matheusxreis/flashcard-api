import mongoose from "mongoose"


export const connection = () => {
    if(process.env.NODE_ENV==="production"){ return `mongodb://${process.env.MONGO_DB_SERVER}/${process.env.DATABASE_NAME}` }
    if(process.env.NODE_ENV==="development") { return `mongodb+srv://${process.env.USERNAME_DB}:${process.env.PASSWORD_DB}${process.env.URL_DB}`}
}


export class Database {
    static async init(){
        mongoose.connect(`${connection()}`)
        .then(()=>console.log("[DATABASE] - Connected!"))
        .catch((err)=>{throw new Error(err)})
    }
}

