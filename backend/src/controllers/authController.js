const jwt = require('jsonwebtoken');

function authenticateToken(req, res, next) {
    const tokenAuth = req.headers['authorization']
    const accessToken = tokenAuth && tokenAuth.split(' ')[1]

    if (accessToken == null) {
        return res.status(401).json({ error: "Token de acesso requerido" })
    }

    jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
        if (err) {
            return res.status(403).json({ error: "Token inválido ou expirado" })
        }
        req.user = user;
        next()
    })
}

module.exports = {
    authenticateToken
}