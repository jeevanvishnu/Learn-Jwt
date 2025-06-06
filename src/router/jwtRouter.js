import express from "express"
import { getLoginPage , getSignupPage} from "../controller/jwt.controller.js"
const router = express()

router.get("/login",getLoginPage)
router.get('/signup',getSignupPage)


export default router