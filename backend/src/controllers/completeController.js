const prisma = require('../prismaClient')

async function getCompleteInfo(req, res){
    try {
        const infoCompleta = await prisma.bLPLayer.findUnique({
            where: { id: req.params.id },
            include: { responses: { include: { question: true } } }
        });
        if (!infoCompleta) return res.status(404).json({ error: "Jogador não encontrado"})
        res.json(infoCompleta)
    } catch (err) {
        res.status(500).json({ error: "Erro ao buscar informação completa"})
    }
}

module.exports = {
    getCompleteInfo
}