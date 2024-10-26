import pkg from "joi"
import { joiErrorFomating } from "../services/formate-joi.js"
import { CustomErrorHandler } from "../services/custom-error-handler.js"
const { ValidationError } = pkg
export const errorHandler = (err, req, res, next)=>{
    let statusCode = 500

    let data = {
        ERROR_DESCRIPTION: 'Inernal Server Error'
    }

    if(err instanceof ValidationError){
        console.log('error',err)
        statusCode = 422
        data = {

            ERROR_DESCRIPTION : joiErrorFomating(err.details)
        }
    }

    if(err instanceof CustomErrorHandler){
        statusCode = err.status
        data = {
            ERROR_DESCRIPTION: err.message
        }
    }


    return res.status(statusCode).json({STAUTS: "ERROR", ...data})
}