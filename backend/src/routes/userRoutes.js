// Rotas de usuário separadas como um Router
const express = require('express')
const router = express.Router()
const prisma = require('../prismaClient')
const bcrypt = require('bcrypt')

router.get('/users', async (req, res) => {
    try {
        const users = await prisma.user.findMany()
        res.json(users)
    } catch (err) {
        res.status(500).json({ error: 'Erro ao buscar usuários' })
    }
})

router.post('/users', async (req, res) => {
    try {
        const { username, email, password } = req.body
        const hashedPassword = await bcrypt.hash(password, 10)

        const newUser = await prisma.user.create({ data: { username, email, password: hashedPassword } })
        res.status(201).json(newUser)
    } catch (err) {
        res.status(500).json({ error: 'Erro ao criar usuário' })
    }
})

router.post('/users/login', async (req, res) => {
    const { email, password } = req.body
    const user = await prisma.user.findUnique({ where: { email } })
    if (user == null){
        return res.status(400).json("Esse usuário não existe")
    }

    try {
        if (await bcrypt.compare(password, user.password)) {
            res.status(200).json("Sucesso ao logar!")
        } else {
            res.status(401).json("Não permitido logar!")
        }
    } catch (err) {
        res.status(500).json({err: "Erro ao logar usuário"})
    }
})

router.put('/users/:id', async (req, res) => {
    try {
        const { username, email, password } = req.body
        const updatedUser = await prisma.user.update({
            where: { id: req.params.id },
            data: { username, email, password }
        })
        res.json(updatedUser)
    } catch (err) {
        res.status(500).json({ error: 'Erro ao atualizar usuário' })
    }
})

router.delete('/users/:id', async (req, res) => {
    try {
        await prisma.user.delete({ where: { id: req.params.id } })
        res.json({ message: 'Usuário deletado com sucesso' })
    } catch (err) {
        res.status(500).json({ error: 'Erro ao deletar usuário' })
    }
})

module.exports = router
