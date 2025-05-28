import { PrismaClient } from "./generated/prisma"
const prisma = new PrismaClient()

const questions = [
    "Favorite Player",
    "Motto"
]

async function main(){
    await prisma.$transaction(
        questions.map((text, index) => prisma.question.create({
            data: {text, orderNumber: index + 1}
        }))
    )

    const perguntas = await prisma.question.findMany()
    console.log(perguntas)
}

main()

.catch(e => {
    console.error(e.message)
})
.finally(async () => {
    await prisma.$disconnect()
})