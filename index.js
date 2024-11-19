import express from 'express'
import { dbconection } from './dbConnection/dbConnection.js'
import userRouter from './src/modules/user/user.routes.js';
import messageRouter from './src/modules/messsage/message.router.js';
import { userModel } from './modols/user.model.js';

import cors from "cors";

const app = express()
const port = 3000
app.use(express.json())
dbconection()


app.use(cors())

app.use(userRouter)
app.use('/message',messageRouter)
app.use((err,req,res,next)=>{
    res.status(500).json({err,message:'err'})
})
app.listen(process.env.PORT || port, () => console.log(`Example app listening on port ${port}!`))