import { Router } from 'express';

const router = Router();

router.get('/profile', (req, res) => {
  if (!req.session.user) {
    return res.redirect('/login');
  }
  res.render('profile', { title: 'Hello People 🖐️', user: req.session.user });
});

router.get('/login', (req, res) => {
  res.render('login', { title: 'Hello People 🖐️' });
});

router.get('/register', (req, res) => {
  res.render('register', { title: 'Hello People 🖐️' });
});

export default router;