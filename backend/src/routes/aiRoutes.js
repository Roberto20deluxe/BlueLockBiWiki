import express from 'express';
import { chatWithAI } from '../controllers/aiController.js';

const router = express.Router();

router.post('/api/chat', chatWithAI);

export default router;