const express = require('express')
const router = express.Router()
const questionsController = require('../controllers/questionsController')
const authController = require('../controllers/authController')

router.get('/questions', authController.authenticateToken, questionsController.getQuestions);
router.post('/questions', authController.authenticateToken, questionsController.createQuestion);

module.exports = router