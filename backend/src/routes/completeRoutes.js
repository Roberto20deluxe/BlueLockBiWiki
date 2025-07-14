const express = require('express')
const router = express.Router()
const completeController = require('../controllers/completeController')
const authController = require('../controllers/authController')

router.get('/complete/:id', authController.authenticateToken, completeController.getCompleteInfo);

module.exports = router