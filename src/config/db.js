import mongoose from "mongoose";
import dotenv from "dotenv"

dotenv.config()

const URL = process.env.MONGO_URL

const connectDb = async () =>{
    try {

       await mongoose.connect(URL)
        .then(()=>console.log("DataBase connected sucessfully"));
       
        
        
    } catch (error) {
        console.log(`Database connection failed ${error}`);
        
    }
}

export default connectDb
