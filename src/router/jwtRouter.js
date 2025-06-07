import express from "express"
import { getLoginPage , getSignupPage,postLogin,getHome,postSignupPage} from "../controller/jwt.controller.js"
import protect from "../middleware/jwttoken.js"

const router = express()

router.get("/login",getLoginPage)
router.post('/login',postLogin)
router.get('/signup',getSignupPage)
router.post('/signup',postSignupPage)
router.get('/home',protect,getHome)


export default router