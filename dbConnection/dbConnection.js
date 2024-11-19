import mongoose from "mongoose"
export  function dbconection (){

   return mongoose.connect('mongodb://127.0.0.1:27017/sara7aApp').then(()=>{console.log('data base connected success')}).catch((err)=>{console.log('err');})
} 