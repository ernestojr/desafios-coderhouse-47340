import { Router } from 'express';

const router = Router();

router.get('/profile', (req, res) => {
  if (!req.user) {
    return res.redirect('/login');
  }
  res.render('profile', { title: 'Hello People 🖐️', user: req.user.toJSON() });
});

router.get('/login', (req, res) => {
  res.render('login', { title: 'Hello People 🖐️' });
});

router.get('/register', (req, res) => {
  res.render('register', { title: 'Hello People 🖐️' });
});

router.get('/recovery-password', (req,res) => {
  res.render('recovery-password', { title: 'Hello People 🖐️' });
});

export default router;