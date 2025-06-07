import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true,
        sparse:true
    },
    password:{
        type:String,
        required:true,
        minlength:[4,'Password must be at least 4 characters'],
        
    }
})

const userModel = mongoose.model("User",userSchema)

export default userModel