import express from "express"
import dotenv from "dotenv"
import path from "path"
import { fileURLToPath } from "url"
import connectDb from "./config/db.js"
import jwtRouter from "./router/jwtRouter.js"
import protect from "./middleware/jwttoken.js"

dotenv.config()

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)


const PORT = process.env.PORT || 4000
const app = express()

app.set("view engine", 'ejs');
app.set("views", path.join(__dirname, "views"));


app.use(express.urlencoded({extended:true}))
app.use(express.json())


app.use('/api/jwt',jwtRouter)

connectDb().then(()=>{

    app.listen(PORT,()=>console.log( `The Port has running on ${PORT}`))
})