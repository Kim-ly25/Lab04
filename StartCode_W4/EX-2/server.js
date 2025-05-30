import express from 'express';
import articleRoutes from './routes/articleRoutes.js';
import journalistRoutes from './routes/journalistRoutes.js';
import categoryRoutes from './routes/categoryRoutes.js';
import logger from './middleware/logger.js';
import cors from 'cors';

const app = express();
app.use(cors());

const PORT = 3000;
app.use(cors());

app.use(logger);
app.use(express.json());

app.use('/articles', articleRoutes);
app.use('/journalists', journalistRoutes);
app.use('/categories', categoryRoutes);

app.get('/', (req, res) => {
    res.send('API is running');
});

app.get('/favicon.ico', (req, res) => res.status(204).end());

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
