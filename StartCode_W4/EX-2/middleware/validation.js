const validateArticle = (req, res, next) => {
  const { title, content, journalistId, categoryId } = req.body;
  if (!title || !content || !journalistId || !categoryId) {
    return res.status(400).json({ error: 'Missing required article fields' });
  }
  next();
};

const validateJournalist = (req, res, next) => {
  const { name, email } = req.body;
  if (!name || !email) {
    return res.status(400).json({ error: 'Missing required journalist fields' });
  }
  next();
};

const validateCategory = (req, res, next) => {
  const { name } = req.body;
  if (!name) {
    return res.status(400).json({ error: 'Missing required category name' });
  }
  next();
};

export { validateArticle, validateJournalist, validateCategory };
