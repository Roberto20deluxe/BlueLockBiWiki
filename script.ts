import { PrismaClient } from "./generated/prisma"
const prisma = new PrismaClient()

async function main(){
    await prisma.user.createMany( { data: [
        {
            name: "Breno Augusto Ferreira",
            email: "brenoaferreira13@gmail.com",
            password: "123"
        },
        {
            name: "Roberto Regis",
            email: "robertoregis@gmail.com",
            password: "1234"
        }
    ]})

    const allusers = await prisma.user.findMany()
    console.log(allusers)
}

main()

.catch(e => {
    console.error(e.message)
})
.finally(async () => {
    await prisma.$disconnect()
})