import path from 'path';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { fileURLToPath } from 'url';

import config from '../config/config.js';

const __filename = fileURLToPath(import.meta.url);

export const __dirname = path.dirname(__filename);

export const getFilterAndOpts = (query = {}) => {
  const { page, limit, sort, first_name, last_name, email } = query;
  const filter = {};
  const opts = { page, limit, sort };
  if (first_name) {
    Object.assign(filter, { first_name });
  }
  if (last_name) {
    Object.assign(filter, { last_name });
  }
  if (email) {
    Object.assign(filter, { email });
  }
  return { filter, opts };
};

export const createPasswordHash = (password) => bcrypt.hash(password, bcrypt.genSaltSync(10));

export const verifyPassword = (password, user) => bcrypt.compare(password, user.password);

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

  return jwt.sign(payload, config.jwtSecret, { expiresIn: '30m' });
};

export const varifyToken = (token) => {
  return new Promise((resolve, reject) => {
    jwt.verify(token, config.jwtSecret, (error, payload)  => {
      if (error) {
        return reject(error);
      }
      resolve(payload);
    });
  });
};