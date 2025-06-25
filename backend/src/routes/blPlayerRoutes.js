const express = require('express')
const router = express.Router()
const playersController = require('../controllers/playersController')

router.get('/blplayers', playersController.getBlPlayers);
router.post('/blplayers', playersController.postBlPlayer);
router.put('/blplayers/:id', playersController.updateBlPlayer);
router.delete('/blplayers/:id', playersController.deleteBlPlayer);

module.exports = router
