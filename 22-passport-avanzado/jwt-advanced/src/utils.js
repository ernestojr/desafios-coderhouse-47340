import path from 'path';
import url from 'url';
import JWT from 'jsonwebtoken';

const __filename = url.fileURLToPath(import.meta.url);
export const __dirname = path.dirname(__filename);

const JWT_SECRETE = 'qBvPkU2X;J1,51Z!~2p[JW.DT|g:4l@'

export const generateToken = (user) => {
  const { id, name, email } = user;
  const payload = { id, name, email };
  return JWT.sign(payload, JWT_SECRETE, { expiresIn: '1m' });
}

export const validateToken = (token) => {
  return new Promise((resolve) => {
    JWT.verify(token, JWT_SECRETE, (error, payload) => {
      if (error) {
        return resolve(false);
      }
      console.log('payload', payload);
      resolve(payload);
    })
  });
}