import express from 'express';
import auth from '../middleware/auth.middleware.js';
import { addProduct } from '../controllers/productController.js';

const router = express.Router();

router.post('/add', auth, addProduct); 

export default router;
