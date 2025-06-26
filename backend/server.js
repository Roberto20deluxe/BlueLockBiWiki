const express = require('express')
const app = express()
app.use(express.json())
const cors = require('cors')

app.use(cors({
    origin: ['http://localhost:3000', 'http://127.0.0.1:3000', 'http://localhost:5173', 'http://127.0.0.1:5173'],
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
}))

const userRoutes = require('./src/routes/userRoutes')
const blPlayerRoutes = require('./src/routes/blPlayerRoutes')
const questions = require('./src/routes/questionRoutes')
const responses = require('./src/routes/responseRoutes')
const complete = require('./src/routes/completeRoutes')
app.use(userRoutes)
app.use(blPlayerRoutes)
app.use(questions)
app.use(responses)
app.use(complete)

app.listen(3001, '0.0.0.0', () => {console.log("Server started on 3001")})