
import {userModel} from './../../../modols/user.model.js';
import bcrypt from 'bcrypt'
import  jwt  from 'jsonwebtoken';
import { sendEmail } from '../../email/email.js';
import { catchError } from './../../utils/catchAsyncerror.js';

const alluser = catchError(async (req,res)=>{

    let user = await userModel.find()
    res.json({user})
})
 
const signUp = catchError(async (req,res)=>{
    const {name,email , password , age}=req.body
  
    let user = await userModel.findOne({email })
    if (user) return res.json('email already exist')
     let hash = bcrypt.hashSync(password, 4) 

    userModel.insertMany({name,email , password:hash , age})
    sendEmail({email})
    res.json({message :'success'})
})
const signIn = async (req,res)=>{
    const {email , password }=req.body
  
    let user = await userModel.findOne({email })
    if (user && bcrypt.compareSync(password,user.password)){
    let token= jwt.sign({name:user.name ,userId :user._id}, 'mynameisali')
        res.json({message:'login', token})
    
}else{
       res.json({message :'invalid email'})  
}
  



}



const veriefy=async (req,res)=>{
    const {token}=req.params

    jwt.verify(token,'alikhaeld3',async(err,decoded)=>{
        if (err)return res.json(err)
        await userModel.findOneAndUpdate({email:decoded.email},{verified:true})
        res.json({'message':'veriefy'})
    })
}

export{
    signUp, signIn,alluser,veriefy
}