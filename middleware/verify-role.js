import { CustomErrorHandler } from "../services/custom-error-handler.js";
import { asyncHandler } from "../utils/async-handler.js";
import jwt from 'jsonwebtoken';


export const verifyRole = asyncHandler(async(req, res, next)=>{

    const JWT_SECRET = process.env.JWT_SECRET
    const authHeader = req.headers.authorization;
    const token = authHeader.split(" ")[1];
    console.log('token', token)
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded; // Attach user details to the request

    // Now check the user's role
    if (!(decoded.role === 'SUPERADMIN' || decoded.role === 'ADMIN')) {
        return next(CustomErrorHandler.unauthorized("You do not have access to this resource."));
    }

    next();
})