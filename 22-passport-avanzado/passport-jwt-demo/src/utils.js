import path from 'path';
import url from 'url';
import JWT from 'jsonwebtoken';
import passport from 'passport';

const __filename = url.fileURLToPath(import.meta.url);
export const __dirname = path.dirname(__filename);

export const JWT_SECRET = 'qBvPkU2X;J1,51Z!~2p[JW.DT|g:4l@'

export const generateToken = (user) => {
  const { id, name, email, role } = user;
  const payload = { id, name, email, role };
  return JWT.sign(payload, JWT_SECRET, { expiresIn: '1m' });
}

export const validateToken = (token) => {
  return new Promise((resolve) => {
    JWT.verify(token, JWT_SECRET, (error, payload) => {
      if (error) {
        return resolve(false);
      }
      console.log('payload', payload);
      resolve(payload);
    })
  });
}

export const authMiddleware = (strategy) => (req, res, next) => {
  passport.authenticate(strategy, function (error, payload, info) {
    if (error) {
      return next(error);
    }
    if (!payload) {
      return res.status(401).json({ message: info.message ? info.message : info.toString() });
    }
    req.user = payload;
    next();
  })(req, res, next);
};

export const authRolesMiddleware = (role) => (req, res, next) => {
  if(!req.user) {
    return res.status(401).json({ message: 'Unauthorized' });
  }
  const { role : userRole } = req.user;
  if (userRole !== role) {
    return res.status(403).json({ message: 'No permissions' });
  }
  next();
};