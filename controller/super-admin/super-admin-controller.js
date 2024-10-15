import { compare } from "bcrypt";
import prisma from "../../config/dbConfig.js";
import { CustomErrorHandler } from "../../services/custom-error-handler.js";
import { findSuperAdmin } from "../../services/find-service.js";
import { ApiResponse } from "../../utils/api-response.js";
import { asyncHandler } from "../../utils/async-handler.js";
import { encryptPassword } from "../../utils/encryptPassword.js";
import { superAdminSchema, superAdminSignInScheam } from "../../validation/super-admin-validation.js"
import jwt from "jsonwebtoken"
export const cerateSuperAdmin =asyncHandler(async(req, res, next)=>{
    const { error } = superAdminSchema.validate(req.body)
    if(error){
        return next(error)
    }
    const { name, email, password } = req.body
    const findUser = await findSuperAdmin(email)
    if(findUser){
        return next(CustomErrorHandler.alreadyExist("This User is Already Register"))
    }
    const encpassword = await encryptPassword(password)
    const newSuperaAdmin = await prisma.superAdmin.create({
        data :{  
            name,
            email,
            password: encpassword,
        }
    }) 
    return res.status(201).json(
        new ApiResponse(newSuperaAdmin, "Super Admin Created Successfully")
    )
})



export const signInSuperAdmin = asyncHandler(async(req, res, next)=>{
    const jwtSecret = process.env.JWT_SECRET
    console.log(jwtSecret)
    const {email, password} = req.body
    const { error } = superAdminSignInScheam.validate(req.body)
    if(error){
        return next(error)
    }
    const findSAdmin = await findSuperAdmin(email)
    if(!findSAdmin){
        return next(CustomErrorHandler.notFound("Super Admin Not Found"))
    }
    const checkPassword =  await compare(password, findSAdmin.password)
    if(!checkPassword){
        return next(CustomErrorHandler.credential("Incorrect Password"))
    }
    const token = jwt.sign(
    {
      id: findSAdmin.id, // Include necessary user info in the payload
      email: findSAdmin.email,
    },
    jwtSecret, 
    { expiresIn: '1h' } // Token expiry time
  );


    // console.log('token', token)
    // return
    return res.status(200).json(
        new ApiResponse({...findSAdmin, token}, "SUCCESSFUL", "Login Successfully")
    )
})