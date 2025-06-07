import jwt from "jsonwebtoken";
import dotenv from "dotenv"
dotenv.config()

const protect =  ((req , res , next)=>{
    const token = req.headers.authorization?.split(' ')[1]

    if(!token){
        return res.status(401).json({message:"No Token Provide"})
    } 
        let key = process.env.JWT_SECRET

        jwt.verify(token ,key,(err,decode)=>{
            if(err) return res.status(401).json({message:"Invaild Token"})
                req.user = decode
              next()
        } )
})
    
export default protect

