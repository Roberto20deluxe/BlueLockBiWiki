import jwt from 'jsonwebtoken';
import * as TokenController from './TokenController.js';

function authenticateToken(req, res, next) {
    const tokenAuth = req.headers['authorization']
    const accessToken = tokenAuth && tokenAuth.split(' ')[1]

    if (accessToken == null) {
        return res.status(401).json({ error: "Token de acesso requerido" })
    }

    jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET, async (err, user) => {
        if (err) {
            if (err.name === 'TokenExpiredError') {
                const refreshToken = req.cookies.refreshToken;
                
                if (!refreshToken) {
                    return res.status(401).json({ error: "Token expirado e sem refresh token disponível" });
                }

                try {
                    const decodificado = jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET);
                    
                    const novoAccessToken = TokenController.generateAccessToken(decodificado.id, decodificado.email);
                    
                    res.setHeader('X-New-Access-Token', novoAccessToken);
                    
                    req.user = decodificado;
                    next();
                } catch (refreshErr) {
                    return res.status(403).json({ error: "Refresh token inválido" });
                }
            } else {
                return res.status(403).json({ error: "Token inválido" });
            }
        } else {
            req.user = user;
            next();
        }
    })
}

export {
    authenticateToken
}