import  jwt  from 'jsonwebtoken';
export const auth = (req,res,next)=>{

let token =req.header('token')
jwt.verify(token, 'mynameisali',async(err, decoded)=>{
    if (err) return res.json({message:'error invalid token'},err)
    req.userId=decoded.userId
    next()
})

}