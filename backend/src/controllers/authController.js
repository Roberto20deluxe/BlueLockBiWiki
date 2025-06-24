require('dotenv').config();
const prisma = require('../prismaClient')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

async function getAllUsers(req, res){
    try {
        const usuarios = await prisma.user.findMany();
        res.json(usuarios);
    } catch (err) {
        res.status(500).json({ error: "Erro ao buscar usuários" });
    }
}

async function createUser(req, res){
     const { username, email, password } = req.body;
     
     try{
        const senhaHashed = await bcrypt.hash(password, 10);
        const novoUsuario = await prisma.user.create({
            data: { username, email, password: senhaHashed }
        });
        res.status(200).json(novoUsuario);
     } catch (err) {
        res.status(500).json({ error: "Erro ao criar usuário" })
     }
}

async function loginCheck(req, res){
    const { email, password } = req.body;

    try {
        const usuario = await prisma.user.findUnique({ where: { email } })
        if (!usuario) return res.status(500).json({ error: "Usuário não encontrado"})
        
        if (await bcrypt.compare(password, usuario.password)) {
            const token = jwt.sign(usuario, process.env.ACCESS_TOKEN_SECRET)
            res.status(200).json({ accessToken: token})
        } else {
            res.status(401).json("Não permitido logar!")
        }
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
}

async function updateUser(req, res){
    const { username, email, password } = req.body;
    
    try {
        const data = { username, email}
        if (password) {
            data.password = await bcrypt.hash(password, 10)
        }
        const usuarioAtualizado = await prisma.user.update({
            where: { id: req.params.id },
            data
        })
        res.json(usuarioAtualizado)
    } catch (err) {
        res.status(500).json({ error: "Erro ao atualizar o usuário"})
    }
}

async function deleteUser(req, res){
    try {
        await prisma.user.delete({ where: { id: req.params.id }})
        res.json("Sucesso ao deletar usuário!")
    } catch (err) {
        res.status(500).json({ error: "Erro ao deletar usuário" })
    }
}

module.exports = {
    getAllUsers,
    createUser,
    loginCheck,
    updateUser,
    deleteUser
}