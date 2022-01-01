import express from "express";
import mongoose from 'mongoose'
import cors from 'cors'
import postRoutes from './routes/routes.js'
import dotenv from 'dotenv'

dotenv.config()
const PORT = process.env.PORT || 2000
const app = express()

app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cors())

app.use('/', postRoutes)
app.use('/', (req, res) => {
    res.send("We r up")
})

mongoose.connect(process.env.CONNECTION, {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => app.listen(PORT, () => {console.log(`Server is running on port ${PORT}`)}))
.catch((error) => console.log(error.message))