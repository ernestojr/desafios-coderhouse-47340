const { Router } = require('express');

const router = Router();

router.get('/', (req, res) => {
  res.render('index', { title: 'Coder House 🚀' });
});

router.get('/register', (req, res) => {
  res.render('register', { title: 'Coder House 🚀' });
});

module.exports = router;