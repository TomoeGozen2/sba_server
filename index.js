import express from 'express'
import { router } from './routes/Movieroutes.js';

const app = express()

const port = 3000;

app.listen(port,() => {
    console.log("port running on " + port)
})

const movieRoutes = './routes/Movieroutes'

app.use('/api', router)