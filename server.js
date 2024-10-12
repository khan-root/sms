import express from 'express'
import dotenv  from 'dotenv'
import mainRoute from './route/index.js'

const app = express()
dotenv.config()

const port = process.env.PORT 

app.use('/api', mainRoute)


app.listen(port, ()=>{
    console.log(`app listen on port ${port}`)
})
