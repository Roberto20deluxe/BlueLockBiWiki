import express from 'express';
import { getQuestions, createQuestion } from '../controllers/questionsController.js';
import { authenticateToken } from '../controllers/authController.js';

const router = express.Router();

router.get('/questions', authenticateToken, getQuestions);
router.post('/questions', authenticateToken, createQuestion);

export default router;