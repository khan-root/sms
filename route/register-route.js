import Router from 'express'
import { createUser, registerUser } from '../controller/register/register-controller.js'
import { verifyRole } from '../middleware/verify-role.js'
import { verifyJWTToken } from '../middleware/verify-jwt.js'
const router = Router()

router.post('/create-user', verifyJWTToken, verifyRole, createUser)
router.post('/signin-user', registerUser)

export default router