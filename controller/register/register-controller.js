// import prisma from "../../config/dbConfig.js"
// import { CustomErrorHandler } from "../../services/custom-error-handler.js"
// import { findOrgByEmail } from "../../services/find-service.js"
// import { ApiResponse } from "../../utils/api-response.js"
import { asyncHandler } from "../../utils/async-handler.js"
// import { registerSchema } from "../../validation/register-validation.js"
// import bcrypt from 'bcrypt'

export const register = asyncHandler(async(req, res, next)=>{
    // const { error } = registerSchema.validate(req.body)

    // if(error){
    //     console.log('Error*****', error)
    //     return next(error)
    // }
    // const {name, email, password} = req.body

    // const findOrg = await findOrgByEmail(email)
    // if(findOrg){
    //     return next(CustomErrorHandler.alreadyExist("Orginization Already Exist"))
    // }

    // const createOrg = await prisma.organization.create({
    //     data:{
    //         name, email, password:bcrypt.hashSync(password, 10),
    //     }        
    // })


    // return res.status(201).json(
    //     new ApiResponse(createOrg, "SUCCESSFULL", "Organization Created Successfully")
    // )

})