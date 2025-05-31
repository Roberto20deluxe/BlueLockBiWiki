const express = require('express')
const router = express.Router()
const prisma = require('../prismaClient')

router.get('/responses', async (req, res) => {
    try {
        const respostas = await prisma.response.findMany({
            include: {question: true}
        });
        res.json(respostas);
    } catch (err) {
        res.status(500).json({ error: "Erro ao buscar perguntas"})
    }
})

router.post('/responses', async (req, res) => {
    const { playerId, questionId, answer, comment } = req.body;
    
    if (!playerId || !questionId || !answer ) {
        res.status(400).json({ error: "playerId, questionId and answer need to be given"})
    }
    try {
        const novaResposta = await prisma.response.create({
            data: {
                playerId,
                questionId,
                answer,
                comment,
            }
        });
        res.status(201).json(novaResposta)
    } catch (err){
        if (err.code === 'P2002') {
            return res.status(409).json({ error: "Já existe uma resposta para esse jogador e pergunta"})
        }
        res.status(500).json({ error: "Erro ao criar resposta" })
    }
})

module.exports = router