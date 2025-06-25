const express = require('express')
const router = express.Router()
const questionsController = require('../controllers/questionsController')

router.get('/questions', questionsController.getQuestions);
router.post('/questions', questionsController.createQuestion);

module.exports = router