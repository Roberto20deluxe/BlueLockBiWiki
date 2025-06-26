const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController')

router.get('/users', userController.getAllUsers);
router.post('/users', userController.createUser); //Não deve ter um middle entre o requerimento e função
router.post('/users/login', userController.loginCheck); //Não deve ter um middleware entre o requerimento e função
router.put('/users/:id', userController.updateUser);
router.delete('/users/:id', userController.deleteUser);

module.exports = router
