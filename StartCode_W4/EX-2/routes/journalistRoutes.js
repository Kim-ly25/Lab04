import express from 'express';
import {
    getAllJournalists,
    getJournalistById,
    createJournalist,
    updateJournalist,
    deleteJournalist,
    getArticlesByJournalist
} from '../controllers/journalistController.js';
import { validateJournalist } from '../middleware/validation.js';

const router = express.Router();

router.get('/', getAllJournalists);
router.get('/:id', getJournalistById);
router.post('/', validateJournalist, createJournalist);
router.put('/:id', validateJournalist, updateJournalist);
router.delete('/:id', deleteJournalist);
router.get('/:id/articles', getArticlesByJournalist);

export default router;
