
 import {Schema,model, SchemaTypes} from 'mongoose'

const  messageSchema = new Schema({
    message:{
        type:String,
        require:true
    },
    receivedId:SchemaTypes.ObjectId



},{timestamps:true})
 export  const  messageModel = model('message',messageSchema)