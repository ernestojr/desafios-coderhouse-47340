import path from 'path';
import JWT from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);

const JWT_SECRET = 'bEub7U!LK{F£rhmzXk!D8861W;Y@=2HC';

export const __dirname = path.dirname(__filename);

export const createHash = password => bcrypt.hashSync(password, bcrypt.genSaltSync(10));

export const isValidPassword = (password, user) => bcrypt.compareSync(password, user.password);

export const generateToken = (user) => {
  const payload = {
    id: user._id,
    first_name: user.first_name,
    last_name: user.last_name,
    email: user.email,
  };
  return JWT.sign(payload, JWT_SECRET, { expiresIn: '1m' });
};

export const verifyToken = (token) => {
  return new Promise((resolve) => {
    JWT.verify(token, JWT_SECRET, (error, payload) => {
      if (error) {
        return resolve(false);
      }
      resolve(payload);
    });
  });
};