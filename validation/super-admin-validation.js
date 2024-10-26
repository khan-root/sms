import Joi from "joi";

export const superAdminSchema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().required(),
    password: Joi.string().required()
})



export const superAdminSignInScheam = Joi.object({
    email: Joi.string().required(),
    password: Joi.string().required()
})