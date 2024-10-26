import jwt from 'jsonwebtoken';
import { CustomErrorHandler } from "../services/custom-error-handler.js";

export const verifyJWTToken = (req, res, next)=>{
    const JWT_SECRET = process.env.JWT_SECRET
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        return next(CustomErrorHandler.unauthorized("Unauthorized: No token provided"));
    }

    const token = authHeader.split(" ")[1];
    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        req.user = decoded;  // Attach user details to the request
        next();
    } catch (err) {
        return next(CustomErrorHandler.unauthorized("Invalid token"));
    }
}