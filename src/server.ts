import express from 'express'
import 'express-async-errors'
import cors from 'cors'

import { router } from './routes'

import dotenv from 'dotenv';

dotenv.config();

const app = express()
app.use(express.json())
app.use(cors())

app.use(router)


app.listen(process.env.PORT, () => {
    console.log("Servidor ligado", process.env.PORT)
})