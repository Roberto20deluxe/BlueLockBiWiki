const express = require('express')
const router = express.Router()
const responseController = require('../controllers/responseController')
const authController = require('../controllers/authController')

router.get('/responses', authController.authenticateToken, responseController.getResponse);
router.post('/responses', authController.authenticateToken, responseController.createResponse);

module.exports = router