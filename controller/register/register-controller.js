import { compare } from "bcrypt";
import prisma from "../../config/dbConfig.js";
import { CustomErrorHandler } from "../../services/custom-error-handler.js";
import { findSuperAdmin, findUser } from "../../services/find-service.js";
import { ApiResponse } from "../../utils/api-response.js";
import { asyncHandler } from "../../utils/async-handler.js";
import { encryptPassword } from "../../utils/encryptPassword.js";
import { registerSchema, signInScheam } from "../../validation/register-validation.js";
import jwt from "jsonwebtoken"

export const createUser = asyncHandler(async(req, res, next)=>{
    const {error} = registerSchema.validate(req.body)
    if(error){
        return next(error)
    }

    const {name, email, password, role} = req.body

    const findSA = await findSuperAdmin(email)
    if(findSA){
        return next(CustomErrorHandler.alreadyExist("This User is Already Super Admin"))
    }
    const findU = await findUser(email)
    if(findU){
        return next(CustomErrorHandler.alreadyExist("This user is already Exist"))
    }

    const encPassword = await encryptPassword(password)
    const newUser = await prisma.user.create({
        data :{
            name, 
            email,
            password:encPassword,
            role
        }
    })

    return res.status(201).json(
        new ApiResponse(newUser, "SUCCESSFUL",`Created successfully`)
    )

})


export const registerUser = asyncHandler(async(req, res, next)=>{
    const jwtSecret = process.env.JWT_SECRET
    console.log('jwtSecret', jwtSecret)
    const {error } = signInScheam.validate(req.body)
    if(error){
        return next(error)
    }
    const {email, password} = req.body
    const findU = await findUser(email)
    if(!findU){
        return next(CustomErrorHandler.notFound("User Not Found"))
    }
    const checkPassword =  await compare(password, findU.password)
    if(!checkPassword){
        return next(CustomErrorHandler.credential("Check your credential "))
    }

    const token = jwt.sign(
        {
        id: findU.id, // Include necessary user info in the payload
        email: findU.email,
        role:findU.role
        },
        jwtSecret, 
        { expiresIn: '1h' } // Token expiry time
    );
    console.log('token', token)
    return res.status(200).json(
        new ApiResponse({...findU, token}, "SUCCESSFUL", "Login Successfully")
    )

})