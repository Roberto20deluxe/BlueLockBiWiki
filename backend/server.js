const express = require('express')
const app = express()
app.use(express.json())
const cors = require('cors')
app.use(cors())

const prisma = require('./prismaClient')

app.get('/users', async (req, res) => {
    try {
        const users = await prisma.user.findMany()
        res.json(users)
    } catch (err) {
        res.status(500).json({ error: 'Erro ao buscar usuários' })
    }
})

app.post('/users', async (req, res) => {
    try {
        const { name, email, password, favBLPlayer } = req.body
        const newUser = await prisma.user.create({ data: { name, email, password, favBLPlayer } })
        res.status(201).json(newUser)
    } catch (err) {
        res.status(500).json({ error: 'Erro ao criar usuário' })
    }
})

app.put('/users/:id', async (req, res) => {
    try {
        const { name, email, password, favBLPlayer } = req.body
        const updatedUser = await prisma.user.update({
            where: { id: req.params.id },
            data: { name, email, password, favBLPlayer }
        })
        res.json(updatedUser)
    } catch (err) {
        res.status(500).json({ error: 'Erro ao atualizar usuário' })
    }
})

app.delete('/users/:id', async (req, res) => {
    try {
        await prisma.user.delete({ where: { id: req.params.id } })
        res.json({ message: 'Usuário deletado com sucesso' })
    } catch (err) {
        res.status(500).json({ error: 'Erro ao deletar usuário' })
    }
})

app.listen(3001, () => {console.log("Server started on 3001")})