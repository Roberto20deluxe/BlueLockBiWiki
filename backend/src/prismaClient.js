const { PrismaClient } = require('./db/generated/prisma/index.js')
const prisma = new PrismaClient()

module.exports = prisma
