import { Router } from 'express';
import  { generateToken, validateToken } from '../utils.js'

const router = Router();

const users = [
  {
    id: '1234',
    name:'Pedrito Larrain',
    email: 'pl@mail.com',
    password: 'qwerty'
  }
];

const auth = async (req, res, next) => {
  const { token } = req.cookies;
  if (!token) {
    return res.status(401).json({ message: 'No deberias esatr aca' });
  }
  const payload = await validateToken(token);
  if (!payload) {
    return res.status(401).json({ message: 'No deberias esatr aca' });
  }
  req.user = payload;
  next();
}

router.post('/auth/login', (req, res) => {
  const { email, password } = req.body;
  const user = users.find(u => u.email === email);
  if (!user) {
    return res.status(401).json({ message: 'Correo o contraseña invlidos.' });
  }
  if (password !== user.password) {
    return res.status(401).json({ message: 'Correo o contraseña invlidos.' });
  }
  const token = generateToken(user);
  res.cookie('token', token, {
    maxAge: 1000*60,
    httpOnly: true,
  })
  .status(200)
  .json({ status: 'success' });
});

router.post('/register', (req, res) => {

});

router.get('/current', auth, (req, res) => {
  res.status(200).send(req.user);
});

export default router;