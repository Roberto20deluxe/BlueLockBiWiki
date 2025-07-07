require('dotenv').config();
const prisma = require('../prismaClient')
const jwt = require('jsonwebtoken')

async function storeRefreshToken(token) {
    if (!token) {
        throw new Error("Token é obrigatório");
    }

    try {
        const response = await prisma.refreshToken.create({ 
            data: { token } 
        });
        return response;
    } catch (err) {
        console.error('Erro ao armazenar refresh token:', err);
        throw new Error("Não foi possível enviar o refreshToken para o banco de dados");
    }
}

async function newAccessToken(req, res) {
    const { token } = req.body || req.query;

    if (!token) {
        return res.status(400).json({ error: "Token é obrigatório" });
    }

    try {
        const decodificado = jwt.verify(token, process.env.REFRESH_TOKEN_SECRET);

        const tokenExists = await prisma.refreshToken.findUnique({ 
            where: { token } 
        });
        
        if (!tokenExists) {
            return res.status(404).json({ error: "O refreshToken não existe" });
        }

        const novoAccessToken = generateAccessToken(decodificado.id, decodificado.email);
        
        return res.status(200).json({ 
            message: "O refreshToken existe", 
            valid: true,
            accessToken: novoAccessToken 
        });
    } catch (err) {
        if (err.name === 'JsonWebTokenError' || err.name === 'TokenExpiredError') {
            return res.status(403).json({ error: "Token inválido ou expirado" });
        }
        console.error('Erro ao buscar refresh token:', err);
        return res.status(400).json({ error: "Erro ao buscar refreshToken" });
    }
}

async function deleteRefreshToken(req, res) {
    const { token } = req.params;

    if (!token) {
        return res.status(400).json({ error: "Token é obrigatório" });
    }

    try {
        await prisma.refreshToken.delete({ 
            where: { token } 
        });
        res.json({ message: "RefreshToken deletado com sucesso" });
    } catch (err) {
        console.error('Erro ao deletar refresh token:', err);
        if (err.code === 'P2025') {
            return res.status(404).json({ error: "RefreshToken não encontrado" });
        }
        res.status(400).json({ error: "Erro ao apagar RefreshToken" });
    }
}

function generateAccessToken(userId, userEmail) {
    return jwt.sign({ id: userId, email: userEmail }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '15s' })
}

function generateRefreshToken(userId, userEmail) {
    return jwt.sign({ id: userId, email: userEmail}, process.env.REFRESH_TOKEN_SECRET)
}

module.exports = {
    storeRefreshToken,
    newAccessToken,
    deleteRefreshToken,
    generateAccessToken,
    generateRefreshToken
}