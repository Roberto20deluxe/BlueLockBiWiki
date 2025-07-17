import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import userRoutes from './src/routes/userRoutes.js';
import blPlayerRoutes from './src/routes/blPlayerRoutes.js';
import questions from './src/routes/questionRoutes.js';
import responses from './src/routes/responseRoutes.js';
import complete from './src/routes/completeRoutes.js';
import refreshTokenRoutes from './src/routes/refreshTokenRoutes.js';
import aiRoutes from './src/routes/aiRoutes.js';

const app = express()
app.use(express.json())
app.use(cookieParser())

app.use(cors({
    origin: ['http://localhost:3000', 'http://127.0.0.1:3000', 'http://localhost:5173', 'http://127.0.0.1:5173'],
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization', 'X-New-Access-Token']
}))

app.use(userRoutes)
app.use(blPlayerRoutes)
app.use(questions)
app.use(responses)
app.use(complete)
app.use(refreshTokenRoutes)
app.use(aiRoutes)

app.listen(3001, '0.0.0.0', () => {console.log("Server started on 3001")})