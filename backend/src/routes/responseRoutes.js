const express = require('express')
const router = express.Router()
const responseController = require('../controllers/responseController')

router.get('/responses', responseController.getResponse);
router.post('/responses', responseController.createResponse);

module.exports = router