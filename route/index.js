import Router from 'express'
import registerRoute from './register-route.js'
import superAdminRoute from './super-admin-route.js'

const mainRoute = Router()

mainRoute.use('/super', superAdminRoute)
mainRoute.use('/register', registerRoute)

export default mainRoute