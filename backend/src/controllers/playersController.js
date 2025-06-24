const prisma = require('../prismaClient')

async function getBlPlayers(req, res){
    try {
        const jogadores = await prisma.bLPLayer.findMany();
        res.json(jogadores);
    } catch (err) {
        res.status(500).json({ error: "Erro ao achar jogadores" })
    }
}

async function postBlPlayer(req, res){
    const { name, age, nickname, birthDate, birthPlace, height, domLeg, shoeSize, bloodType, vision, zodiac, imageUrl, ageComment } = req.body;
    if (birthDate) {
        birthDate = new Date(birthDate);
        if (isNaN(birthDate.getTime())) {
            return res.status(400).json({ error: 'Data de nascimento inválida' });
        }
    }

    try {
        const novoJogador = await prisma.bLPLayer.create({ 
            data: { name, age, nickname, birthDate, birthPlace, height, domLeg, shoeSize, bloodType, vision, zodiac, imageUrl, ageComment } 
        })
        res.status(201).json(novoJogador)
    } catch (err) {
        res.status(400).json({ error: "Erro ao criar jogador" })
    }
}

async function updateBlPlayer(req, res){
    const { name, age, nickname, birthDate, birthPlace, height, domLeg, shoeSize, bloodType, vision, zodiac, imageUrl, ageComment } = req.body;
    try {
        const jogadorAtualizado = await prisma.bLPLayer.update({
            where: { id: req.params.id },
            data: { name, age, nickname, birthDate, birthPlace, height, domLeg, shoeSize, bloodType, vision, zodiac, imageUrl, ageComment }
        })
        res.json(jogadorAtualizado)
    } catch (err) {
        res.status(500).json({ error: "Erro ao atualizar informações do jogador" })
    }
}

async function deleteBlPlayer(req, res){
    try {
        await prisma.bLPLayer.delete({
            where: { id: req.params.id }
        })
        res.json("Jogador apagado com sucesso")
    } catch (err) {
        res.json(500).json({ error: "Erro ao apagar jogador" })
    }
}

module.exports = {
    getBlPlayers,
    postBlPlayer,
    updateBlPlayer,
    deleteBlPlayer
}