import { Router } from 'express';

const router = Router();

router.post('/api/cookie', (req, res) => {
  const { body: { fullname, email } } = req;
  res
    .cookie('fullname', fullname)
    .cookie('email', email)
    .redirect('/');
});

router.get('/api/cookie', (req, res) => {
  const cookies = req.cookies;
  res
    .status(200)
    .json(cookies);
});

export default router;