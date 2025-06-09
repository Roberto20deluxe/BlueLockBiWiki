const express = require('express')
const router = express.Router()
const prisma = require('../prismaClient')

router.get('/questions', async (req, res) => {
    try {
        const questions = await prisma.question.findMany()
        res.json(questions)
    } catch (err) {
        res.status(500).json({ error: "Erro ao buscar perguntas"})
    }
})

module.exports = router