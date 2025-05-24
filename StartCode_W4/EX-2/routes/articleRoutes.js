import express from 'express';
import {
    getAllArticles,
    getArticleById,
    createArticle,
    updateArticle,
    deleteArticle
} from '../controllers/articleController.js';
import { validateArticle } from '../middleware/validation.js';

const router = express.Router();

router.get('/', getAllArticles);
router.get('/:id', getArticleById);
router.post('/', validateArticle, createArticle);
router.put('/:id', validateArticle, updateArticle);
router.delete('/:id', deleteArticle);

export default router;
