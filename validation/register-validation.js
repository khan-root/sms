import Joi from "joi";

export const registerSchema = Joi.object({
    name:Joi.string().required(),
    email:Joi.string().required(),
    password: Joi.string().required(),
    role:Joi.string().required()
})


export const signInScheam = Joi.object({
    email:Joi.string().required(),
    password:Joi.string().required()
})