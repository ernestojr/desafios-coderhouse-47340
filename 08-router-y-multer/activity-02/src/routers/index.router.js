const { Router } = require('express');

const router = Router();

router.get('/', (req, res) => {
  res.status(200).json({ message: 'Wellcome to new server in express js.' });
});

module.exports = router;