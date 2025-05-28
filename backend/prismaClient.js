const { PrismaClient } = require('../database/generated/prisma/index.js')
const prisma = new PrismaClient()

module.exports = prisma
