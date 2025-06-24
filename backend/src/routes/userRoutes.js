// Rotas de usuário separadas como um Router
const express = require('express')
const router = express.Router()
const authController = require('../controllers/authController')

router.get('/users', authController.getAllUsers);
router.post('/users', authController.createUser);
router.post('/users/login', authController.loginCheck);
router.put('/users/:id', authController.updateUser);
router.delete('/users/:id', authController.deleteUser);

module.exports = router
