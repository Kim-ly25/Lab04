import { journalists, articles } from '../models/data.js';

let journalistList = [...journalists];

// Get all journalists
export const getAllJournalists = (req, res) => {
  res.status(200).json(journalistList);
};

// Get journalist by ID
export const getJournalistById = (req, res) => {
  const id = parseInt(req.params.id);
  const journalist = journalistList.find(j => j.id === id);
  if (!journalist) {
    return res.status(404).json({ message: 'Journalist not found' });
  }
  res.status(200).json(journalist);
};

// Create a new journalist
export const createJournalist = (req, res) => {
  const { name, email } = req.body;
  if (!name || !email) {
    return res.status(400).json({ message: 'Missing required fields' });
  }
  const newId = journalistList.length > 0 ? Math.max(...journalistList.map(j => j.id)) + 1 : 1;
  const newJournalist = { id: newId, name, email };
  journalistList.push(newJournalist);
  res.status(201).json(newJournalist);
};

// Update an existing journalist
export const updateJournalist = (req, res) => {
  const id = parseInt(req.params.id);
  const journalistIndex = journalistList.findIndex(j => j.id === id);
  if (journalistIndex === -1) {
    return res.status(404).json({ message: 'Journalist not found' });
  }
  const { name, email } = req.body;
  if (!name || !email) {
    return res.status(400).json({ message: 'Missing required fields' });
  }
  journalistList[journalistIndex] = { id, name, email };
  res.status(200).json(journalistList[journalistIndex]);
};

// Delete a journalist
export const deleteJournalist = (req, res) => {
  const id = parseInt(req.params.id);
  const journalistIndex = journalistList.findIndex(j => j.id === id);
  if (journalistIndex === -1) {
    return res.status(404).json({ message: 'Journalist not found' });
  }
  journalistList.splice(journalistIndex, 1);
  res.status(204).send();
};

// Get articles by a specific journalist
export const getArticlesByJournalist = (req, res) => {
  const id = parseInt(req.params.id);
  const journalist = journalistList.find(j => j.id === id);
  if (!journalist) {
    return res.status(404).json({ message: 'Journalist not found' });
  }
  const journalistArticles = articles.filter(a => a.journalistId === id);
  res.status(200).json(journalistArticles);
};
