import mongoose from "mongoose";

class User{

    constructor(readonly username:string, 
                readonly id:string,
                readonly createdAt: number){}

}


let userSchema = new mongoose.Schema({
    username:String, 
    password:String,
    createdAt:Number,
})

let UserModel = mongoose.model("users", userSchema);

export { User, UserModel }