import { Router } from 'express';
import passport from 'passport';

const router = Router();

router.get('/profile', passport.authenticate('jwt', { session: false, failureRedirect: '/login' }), (req, res) => {
  console.log('req.user', req.user);
  if (!req.user) {
    return res.redirect('/login');
  }
  res.render('profile', { title: 'Hello People 🖐️', user: req.user });
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