// Rotas de BLPlayer separadas como um Router
const express = require('express')
const router = express.Router()
const prisma = require('../prismaClient')

router.get('/blplayers', async (req, res) => {
    try {
        const players = await prisma.bLPLayer.findMany()
        res.json(players)
    } catch (err) {
        res.status(500).json({ error: 'Erro ao buscar jogadores' })
    }
})

router.post('/blplayers', async (req, res) => {
    try {
        const { name, age, nickname, birthDate, birthPlace, height, domLeg, shoeSize, bloodType, vision, zodiac, imageUrl } = req.body
        const newPlayer = await prisma.bLPLayer.create({ data: { name, age, nickname, birthDate, birthPlace, height, domLeg, shoeSize, bloodType, vision, zodiac, imageUrl } })
        res.status(201).json(newPlayer)
    } catch (err) {
        res.status(500).json({ error: 'Erro ao criar jogador' })
    }
})

router.put('/blplayers/:id', async (req, res) => {
    try {
        const { name, age, nickname, birthDate, birthPlace, height, domLeg, shoeSize, bloodType, vision, zodiac, imageUrl } = req.body
        const updatedPlayer = await prisma.bLPLayer.update({
            where: { id: req.params.id },
            data: { name, age, nickname, birthDate, birthPlace, height, domLeg, shoeSize, bloodType, vision, zodiac, imageUrl }
        })
        res.json(updatedPlayer)
    } catch (err) {
        res.status(500).json({ error: 'Erro ao atualizar jogador' })
    }
})

router.delete('/blplayers/:id', async (req, res) => {
    try {
        await prisma.bLPLayer.delete({ where: { id: req.params.id } })
        res.json({ message: 'Jogador deletado com sucesso' })
    } catch (err) {
        res.status(500).json({ error: 'Erro ao deletar jogador' })
    }
})

module.exports = router
