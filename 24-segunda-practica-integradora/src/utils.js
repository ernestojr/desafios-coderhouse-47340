import path from 'path';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);

export const __dirname = path.dirname(__filename);

export const createHash = (password) => bcrypt.hashSync(password, bcrypt.genSaltSync(10));

export const verifyPassword = (password, user) => bcrypt.compareSync(password, user.password);

export const JWT_SECRET = 'qBvPkU2X;J1,51Z!~2p[JW.DT|g:4l@';

export const createToken = (user) => {
  const {
    _id,
    first_name,
    last_name,
    dni,
    email,
    role,
  } = user;

  const payload = {
    id: _id,
    first_name,
    last_name,
    dni,
    email,
    role,
  };

  return jwt.sign(payload, JWT_SECRET, { expiresIn: '30m' });
}

export const varifyToken = (token) => {
  return new Promise((resolve, reject) => {
    jwt.verify(token, JWT_SECRET, (error, payload)  => {
      if (error) {
        return reject(error);
      }
      resolve(payload);
    });
  });
}

export const authMiddleware = roles => (req, res, next) => {
  const { user } = req;
  if(!user) {
    return res.status(401).json({ message: 'unauthorized 😨' });
  }
  if (!roles.includes(user.role)) {
    return res.status(403).json({ message: 'forbidden 😨' });
  }
  next();
};