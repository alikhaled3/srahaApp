import { messageModel } from "../../../modols/message.model.js";
import { sendEmail } from "../../email/email.js";


const addMsg =async (req,res)=>{
    const {message ,receivedId}=req.body
    await messageModel.insertMany({message, receivedId})
    res.json({message:'success'})
}


const getUserMsg =async (req, res)=>{
    sendEmail()
    const messages = await messageModel.find({receivedId :req.userId})
    res.json({message:'success',messages})

}

export{
    addMsg,
    getUserMsg
}