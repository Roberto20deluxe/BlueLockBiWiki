const express = require('express')
const router = express.Router()
const prisma = require('../prismaClient')

router.get('/complete/:id', async (req, res) => {
    try {
        const informations = await prisma.bLPLayer.findUnique({
            where: { id: req.params.id },
            include: { responses: { include: { question: true } } }
        });
        if (!informations) return res.status(404).json({ error: "Jogador não encontrado"})
        res.json(informations)
    } catch (err) {
        res.status(500).json({ error: "Erro ao buscar informações"})
    }
})

module.exports = router