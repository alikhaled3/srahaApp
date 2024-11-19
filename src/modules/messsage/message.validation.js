import Joi from "joi";



const messageschema = Joi.object(
{
    name:Joi.string().min(3).max(20)
}
)