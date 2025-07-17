import dotenv from 'dotenv';
import prisma from '../prismaClient.js';
import bcrypt from 'bcrypt';
import * as TokenController from "./TokenController.js";

dotenv.config();

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
        const emailExistente = await prisma.user.findUnique({
            where: { email }
        });
        
        if (emailExistente) {
            return res.status(400).json({ error: "Usuário com este email já existe" });
        }

        const senhaHashed = await bcrypt.hash(password, 10);
        const novoUsuario = await prisma.user.create({
            data: { username, email, password: senhaHashed }
        });
        const token = TokenController.generateAccessToken(novoUsuario.id, novoUsuario.email)
        const refreshToken = TokenController.generateRefreshToken(novoUsuario.id, novoUsuario.email)
        
        res.cookie('refreshToken', refreshToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict',
            maxAge: 15 * 60 * 1000 //15 minutos
        });
        
        res.status(200).json({ accessToken: token });
     } catch (err) {
        console.error('Erro ao criar usuário:', err);
        
        if (err.code === 'P2002') {
            return res.status(400).json({ error: "Usuário com este email já existe" });
        }
        
        res.status(500).json({ error: "Erro ao criar usuário" })
     }
}

async function loginCheck(req, res){
    const { email, password } = req.body;

    try {
        const usuario = await prisma.user.findUnique({ where: { email } })
        if (!usuario) return res.status(401).json({ error: "Usuário não encontrado"})
        
        if (await bcrypt.compare(password, usuario.password)) {
            const token = TokenController.generateAccessToken(usuario.id, usuario.email)
            const refreshToken = TokenController.generateRefreshToken(usuario.id, usuario.email)
            
            res.cookie('refreshToken', refreshToken, {
                httpOnly: true,
                secure: process.env.NODE_ENV === 'production',
                sameSite: 'strict',
                maxAge: 15 * 60 * 1000 //15 minutos
            });
            
            res.status(200).json({ accessToken: token })
        } else {
            res.status(401).json({ error: "Credenciais inválidas!" })
        }
    } catch (err) {
        console.error('Erro no login:', err);
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

async function logoutUser(req, res) {
    const token = req.cookies.refreshToken;

    if (!token) {
        return res.status(400).json({ error: "Token é obrigatório" });
    }

    try {
        res.clearCookie('refreshToken');
        
        return res.status(200).json({ message: "Deslogado com sucesso" })
        
    } catch (err) {
        console.error('Erro ao fazer logout:', err);
        if (err.code === 'P2025') {
            return res.status(404).json({ error: "RefreshToken não encontrado" });
        }
        return res.status(403).json({ error: "Erro ao tentar deslogar"})
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

export {
    getAllUsers,
    createUser,
    loginCheck,
    updateUser,
    logoutUser,
    deleteUser,
}