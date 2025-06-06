import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true,
        min:4,
        max:16
    }
})

const userModel = mongoose.model("User",userSchema)

export default userModel