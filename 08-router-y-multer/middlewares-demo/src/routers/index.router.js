const { Router } = require('express');

const router = Router();

router.get('/error-demo', (req, res) => {
  throw new Error('Error de prueba 🥸');
  res.status(200).json({ message: 'Wellcome to new server in express js.' });
});

module.exports = router;