import express from 'express';
import { getBlPlayers, postBlPlayer, updateBlPlayer, deleteBlPlayer } from '../controllers/playersController.js';
import { authenticateToken } from '../controllers/authController.js';

const router = express.Router();

router.get('/blplayers', authenticateToken, getBlPlayers);
router.post('/blplayers', authenticateToken, postBlPlayer);
router.put('/blplayers/:id', authenticateToken, updateBlPlayer);
router.delete('/blplayers/:id', authenticateToken, deleteBlPlayer);

export default router;
