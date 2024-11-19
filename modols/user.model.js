import {Schema,model} from 'mongoose'

const userSchema = new Schema({
    name:{
        type:String,
        minLenght:[3 ,'too short name'],
        require:true
    },
    email:{
        type :String,
        require:true,
        require:true
    },
    password:{
        type : String,
        minLenght:[3,'too short password'],
        maxLenght:[30,'too long password'],
        require:true
    },
    age:{
        type :Number,
        min:[5],
        max:[100]
    },
    verified:{ 
        type:Boolean,
        default:false
    },
    isActive:{
        type:Boolean,
        default:true
    }


},{timestamps:true})
 export const  userModel=model('user',userSchema)

