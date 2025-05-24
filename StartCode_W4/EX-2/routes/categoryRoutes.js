import express from 'express';
import {
    getAllCategories,
    getCategoryById,
    createCategory,
    updateCategory,
    deleteCategory,
    getArticlesByCategory
} from '../controllers/categoryController.js';
import { validateCategory } from '../middleware/validation.js';

const router = express.Router();

router.get('/', getAllCategories);
router.get('/:id', getCategoryById);
router.post('/', validateCategory, createCategory);
router.put('/:id', validateCategory, updateCategory);
router.delete('/:id', deleteCategory);
router.get('/:id/articles', getArticlesByCategory);

export default router;
