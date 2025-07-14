const express = require('express')
const router = express.Router()
const playersController = require('../controllers/playersController')
const authController = require('../controllers/authController')

router.get('/blplayers', authController.authenticateToken, playersController.getBlPlayers);
router.post('/blplayers', authController.authenticateToken, playersController.postBlPlayer);
router.put('/blplayers/:id', authController.authenticateToken, playersController.updateBlPlayer);
router.delete('/blplayers/:id', authController.authenticateToken, playersController.deleteBlPlayer);

module.exports = router
