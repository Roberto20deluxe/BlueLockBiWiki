import { PrismaClient } from "./generated/prisma"
const prisma = new PrismaClient()

const questions = [
    "Family",
    "Team",
    "Grip strenght",
    "Favorite player",
    "Age started playing soccer",
    "Motto",
    "What believes to be your strenght",
    "What believes to be your weakness",
    "Food that likes the most",
    "Food that dislikes the most",
    "What goes best with rice",
    "Hobbies",
    "Favorite season",
    "Favorite song",
    "Favorite movie",
    "Favorite color",
    "Favorite animal",
    "Favorite historical figure",
    "Subject you are good at",
    "Subject you are bad at",
    "Fetish",
    "What makes you happy",
    "What makes you sad",
    "Ideal type",
    "Number of valentine's chocolate received last year",
    "Hours of sleep",
    "First thing to wash in the shower",
    "Which apps uses the most",
    "Mushroom or Bamboo",
    "Last time you cried",
    "Until what age received gifts from Santa",
    "What did ask for christmas",
    "What would do at your last day on earth",
    "What would do with 100 million yen",
    "How spend the days off",
    "What would do if had never came across soccer", 
    "If could bring one thing to a deserted island",
    "If had a time machine, would go to past or future"
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