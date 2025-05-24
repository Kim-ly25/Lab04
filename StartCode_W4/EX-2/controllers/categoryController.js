import { categories, articles } from '../models/data.js';

let categoryList = [...categories];

// Get all categories
export const getAllCategories = (req, res) => {
  res.status(200).json(categoryList);
};

// Get category by ID
export const getCategoryById = (req, res) => {
  const id = parseInt(req.params.id);
  const category = categoryList.find(c => c.id === id);
  if (!category) {
    return res.status(404).json({ message: 'Category not found' });
  }
  res.status(200).json(category);
};

// Create a new category
export const createCategory = (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res.status(400).json({ message: 'Missing required field: name' });
  }
  const newId = categoryList.length > 0 ? Math.max(...categoryList.map(c => c.id)) + 1 : 1;
  const newCategory = { id: newId, name };
  categoryList.push(newCategory);
  res.status(201).json(newCategory);
};

// Update an existing category
export const updateCategory = (req, res) => {
  const id = parseInt(req.params.id);
  const categoryIndex = categoryList.findIndex(c => c.id === id);
  if (categoryIndex === -1) {
    return res.status(404).json({ message: 'Category not found' });
  }
  const { name } = req.body;
  if (!name) {
    return res.status(400).json({ message: 'Missing required field: name' });
  }
  categoryList[categoryIndex] = { id, name };
  res.status(200).json(categoryList[categoryIndex]);
};

// Delete a category
export const deleteCategory = (req, res) => {
  const id = parseInt(req.params.id);
  const categoryIndex = categoryList.findIndex(c => c.id === id);
  if (categoryIndex === -1) {
    return res.status(404).json({ message: 'Category not found' });
  }
  categoryList.splice(categoryIndex, 1);
  res.status(204).send();
};

// Get articles from a category
export const getArticlesByCategory = (req, res) => {
  const id = parseInt(req.params.id);
  const category = categoryList.find(c => c.id === id);
  if (!category) {
    return res.status(404).json({ message: 'Category not found' });
  }
  const categoryArticles = articles.filter(a => a.categoryId === id);
  res.status(200).json(categoryArticles);
};
