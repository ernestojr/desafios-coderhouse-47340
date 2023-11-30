import { Router } from 'express';

const router = Router();

const EMAIL_USER = 'a@b.c';
const PASSWORD_USER = 'qwerty';

const isAuth = (req, res, next) => {
  if (!req.session.isAuth) {
    return res.status(401).send('No tines permiso de estar aqui 😨.');
  }
  next();
};

// http://localhost:8080/login?email=a@b.c&password=qwerty

router.get('/login', (req, res) => {
  const { email, password } = req.query;
  if (email !== EMAIL_USER || password !== PASSWORD_USER) {
    return res.status(401).send('Usuario o contraseña son invalidos 😨');
  }
  req.session.email = email;
  req.session.isAdmin = true;
  req.session.isAuth = true;
  res.status(200).send('ok');
});

router.get('/profile', isAuth, (req, res) => {
  res.json({
    email: req.session.email,
    isAdmin: req.session.isAdmin,
  });
});

router.get('/logout', (req, res) => {
  req.session.destroy((error) => {
    if (error) {
      res.status(500).json({ message: 'Ha ocurrido un error durante el logout 😨'});
    } else {
      res.status(200).json({ message: 'Se ha cerrado la session correntamente 😁'});
    }
  });
});

export default router;