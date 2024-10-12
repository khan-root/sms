import Router from 'express'
import { register } from '../controller/register/register-controller.js'
const router = Router()

router.post('/', register)

export default router