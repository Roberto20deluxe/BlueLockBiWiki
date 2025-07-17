import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';

dotenv.config();

async function newAccessToken(req, res) {
    const token = req.cookies.refreshToken;

    if (!token) {
        return res.status(400).json({ error: "Token é obrigatório" });
    }

    try {
        const decodificado = jwt.verify(token, process.env.REFRESH_TOKEN_SECRET);

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

function generateAccessToken(userId, userEmail) {
    return jwt.sign({ id: userId, email: userEmail }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '10s' })
}

function generateRefreshToken(userId, userEmail) {
    return jwt.sign({ id: userId, email: userEmail}, process.env.REFRESH_TOKEN_SECRET, { expiresIn: '15m'})
}

export {
    newAccessToken,
    generateAccessToken,
    generateRefreshToken
}