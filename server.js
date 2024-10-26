import express from 'express'
import dotenv  from 'dotenv'
import mainRoute from './route/index.js'
import { errorHandler } from './middleware/error-handler.js'

const app = express()
dotenv.config()

const port = process.env.PORT 
app.use(express.json())
app.use('/api', mainRoute)


app.use(errorHandler)


app.listen(port, ()=>{
    console.log(`app listen on port ${port}`)
})
