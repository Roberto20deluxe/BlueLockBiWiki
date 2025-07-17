import express from 'express';
import { newAccessToken } from '../controllers/TokenController.js';

const router = express.Router();

router.get('/token/verify', newAccessToken);

export default router;