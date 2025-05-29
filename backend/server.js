const express = require('express')
const app = express()
app.use(express.json())
const cors = require('cors')
app.use(cors())

const prisma = require('./prismaClient')

const userRoutes = require('./routes/userRoutes')
const blPlayerRoutes = require('./routes/blPlayerRoutes')
app.use(userRoutes)
app.use(blPlayerRoutes)

app.listen(3001, () => {console.log("Server started on 3001")})