import express from 'express';
import { getCompleteInfo } from '../controllers/completeController.js';
import { authenticateToken } from '../controllers/authController.js';

const router = express.Router();

router.get('/complete/:id', authenticateToken, getCompleteInfo);

export default router;