import Router from 'express'
import registerRoute from './register-route.js'
import superAdminRoute from './super-admin-route.js'

const mainRoute = Router()

mainRoute.use('/register', registerRoute)
mainRoute.use('/super', superAdminRoute)

export default mainRoute