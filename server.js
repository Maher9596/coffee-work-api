import express from "express";
import mongoose from 'mongoose'
import cors from 'cors'
import postRoutes from './routes/routes.js'
const PORT = process.env.PORT || 2000
const CONNECTION = "mongodb+srv://admin:coffee&work@cluster0.mqbii.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
const app = express()

app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cors())

app.use('/posts', postRoutes)
app.use('/', (req, res) => {
    res.send("We r up")
})

mongoose.connect(CONNECTION, {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => app.listen(PORT, () => {console.log(`Server is running on port ${PORT}`)}))
.catch((error) => console.log(error.message))