const prisma = require('../prismaClient')

async function getQuestions(req, res){
    try {
        const questions = await prisma.question.findMany()
        res.json(questions)
    } catch (err) {
        res.status(500).json({ error: "Erro ao buscar perguntas"})
    }
}

async function createQuestion(req, res){
    const { questions } = req.body;
    if (!Array.isArray(questions) || questions.length === 0) {
        return res.status(400).json({ error: "Envie um array de perguntas no campo 'questions'" });
    }
    try {
        const createdQuestions = await prisma.$transaction(
            questions.map((text, index) =>
                prisma.question.create({
                    data: { text, orderNumber: index + 1 }
                })
            )
        );
        res.status(201).json(createdQuestions);
    } catch (err) {
        res.status(500).json({ error: "Erro ao criar perguntas" });
    }
}

module.exports = {
    getQuestions,
    createQuestion
}