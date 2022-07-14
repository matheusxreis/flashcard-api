import mongoose from "mongoose"

export class Database {
    static async init(){
        mongoose.connect(`mongodb://${process.env.MONGO_DB_SERVER}/${process.env.DATABASE_NAME}`)
        .then(()=>console.log("[DATABASE] - Connected!" +`mongodb://${process.env.MONGO_DB_SERVER}/${process.env.DATABASE_NAME}` ))
        .catch((err)=>{throw new Error(err)})
    }
}