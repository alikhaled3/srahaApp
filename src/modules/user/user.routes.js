import { alluser, signIn,signUp, veriefy } from "./user.controller.js";
import express from 'express'
const userRouter = express.Router()



userRouter.get('/',alluser)
userRouter.post('/signUp',signUp)
userRouter.post('/signIn',signIn)

userRouter.get('/veriefy/:token',veriefy)




export default userRouter