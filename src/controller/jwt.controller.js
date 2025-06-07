import User from "../model/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"
import dotenv from "dotenv"
dotenv.config()


 const createToken = (id) =>{
   return jwt.sign({id},process.env.JWT_SECRET,{
        expiresIn:process.env.JWT_EXPIRES_IN
    })
}


export const getLoginPage = (req , res) =>{
    try {
        res.render('login')
    } catch (error) {
        console.log(error.message);
        
    }
}

export const postLogin = async (req,res)=>{
   try {
    const {email,password} = req.body
    const user = await User.findOne({email})
    console.log(user);
    
    if(!user) return res.json({message:"Invaid user"})
        res.redirect('home')

   } catch (error) {
      console.log(error.message);
      
   }
}

export const getSignupPage = (req , res) =>{
    try {
        res.render("signup")
    } catch (error) {
        console.log(error.message);
        
    }
}

export const postSignupPage = async (req,res)=>{
       try {
        
        
        const {email,password} =  req.body
        const hashedPassword = await bcrypt.hash(password,10)
        const newUser = await User.create({email:email,password:hashedPassword})
        
        const token =  createToken(newUser._id)
        console.log("Token:",token);

          res.status(201).json({
            success: true,
            message: "User created successfully",
            token: token
        })
        
        
        
        
    } catch (error) {
        if(error.name === "ValidationError"){
             const errors = Object.values(error.errors).map(e => e.message);
            res.status(400).json({errors})
        }else{
            res.status(500).json({ success: false, message: "Server Error" });
        }
        
    }
    
    
}

export const getHome = (req,res)=>{
    try {
        console.log(req.user);
        
        res.render("home",{user:req.user || null})
    } catch (error) {
        
    }
}