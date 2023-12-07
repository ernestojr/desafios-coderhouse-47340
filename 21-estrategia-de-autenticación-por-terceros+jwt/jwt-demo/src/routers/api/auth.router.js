import { Router } from 'express';
import UserModel from '../../models/user.model.js';
import {
  createHash,
  isValidPassword,
  generateToken,
  verifyToken,
} from '../../utils.js';

const router = Router();

router.post('/auth/login', async (req, res) => {
  const { email, password } = req.body;
  const user = await UserModel.findOne({ email });
  if (!user) {
    res.status(401).json({ message: 'Usuario o contraseña invalidos' });
  }
  const isNotValidPassword = !isValidPassword(password, user);
  if (isNotValidPassword) {
    res.status(401).json({ message: 'Usuario o contraseña invalidos' });
  }
  const token = generateToken(user);
  res.status(200).json({ access_token: token });
});

const jwtAuth = async (req, res, next) => {
  const { headers: { authorization : token } } = req;
  console.log('token', token);
  const payload = await verifyToken(token);
  if (!payload) {
    res.status(401).json({ message: 'No tienes permiso para estar aca.' });
  }
  req.user = payload;
  next();
};

router.get('/auth/current', jwtAuth, (req, res) => {
  res.status(200).json(req.user);
});

export default router;