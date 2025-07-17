import express from 'express';
import { getAllUsers, createUser, loginCheck, logoutUser, updateUser, deleteUser } from '../controllers/userController.js';

const router = express.Router();

router.get('/users', getAllUsers);
router.post('/users', createUser); //Não deve ter um middle entre o requerimento e função
router.post('/users/login', loginCheck); //Não deve ter um middleware entre o requerimento e função
router.post('/logout', logoutUser)
router.put('/users/:id', updateUser);
router.delete('/users/:id', deleteUser);

export default router;
