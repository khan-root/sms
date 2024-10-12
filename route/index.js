import Router from 'express'
import registerRoute from './register-route.js'

const mainRoute = Router()

mainRoute.use('/register', registerRoute)

export default mainRoute