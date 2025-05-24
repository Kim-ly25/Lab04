import { articles } from '../models/data.js';

let articleList = [...articles];

// Get all articles
export const getAllArticles = (req, res) => {
  res.status(200).json(articleList);
};

// Get article by ID
export const getArticleById = (req, res) => {
  const id = parseInt(req.params.id);
  const article = articleList.find(a => a.id === id);
  if (!article) {
    return res.status(404).json({ message: 'Article not found' });
  }
  res.status(200).json(article);
};

// Create a new article
export const createArticle = (req, res) => {
  const { title, content, journalistId, categoryId } = req.body;
  if (!title || !content || !journalistId || !categoryId) {
    return res.status(400).json({ message: 'Missing required fields' });
  }
  const newId = articleList.length > 0 ? Math.max(...articleList.map(a => a.id)) + 1 : 1;
  const newArticle = { id: newId, title, content, journalistId, categoryId };
  articleList.push(newArticle);
  res.status(201).json(newArticle);
};

// Update an existing article
export const updateArticle = (req, res) => {
  const id = parseInt(req.params.id);
  const articleIndex = articleList.findIndex(a => a.id === id);
  if (articleIndex === -1) {
    return res.status(404).json({ message: 'Article not found' });
  }
  const { title, content, journalistId, categoryId } = req.body;
  if (!title || !content || !journalistId || !categoryId) {
    return res.status(400).json({ message: 'Missing required fields' });
  }
  articleList[articleIndex] = { id, title, content, journalistId, categoryId };
  res.status(200).json(articleList[articleIndex]);
};

// Delete an article
export const deleteArticle = (req, res) => {
  const id = parseInt(req.params.id);
  const articleIndex = articleList.findIndex(a => a.id === id);
  if (articleIndex === -1) {
    return res.status(404).json({ message: 'Article not found' });
  }
  articleList.splice(articleIndex, 1);
  res.status(204).send();
};
