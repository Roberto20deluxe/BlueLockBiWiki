const express = require('express')
const router = express.Router()
const completeController = require('../controllers/completeController')

router.get('/complete/:id', completeController.getCompleteInfo);

module.exports = router