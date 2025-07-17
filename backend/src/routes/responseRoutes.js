import express from 'express';
import { getResponse, createResponse } from '../controllers/responseController.js';
import { authenticateToken } from '../controllers/authController.js';

const router = express.Router();

router.get('/responses', authenticateToken, getResponse);
router.post('/responses', authenticateToken, createResponse);

export default router;