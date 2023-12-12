import passport from 'passport';
import { Strategy as JWTStrategy, ExtractJwt } from 'passport-jwt';
import { JWT_SECRET } from '../utils.js';

const cookieExtractor = (req) => {
  let token = null;
  if (req && req.cookies) {
    token = req.cookies.token;
  }
  return token;
}

export const init = () => {
  const jwtOptions = {
    secretOrKey: JWT_SECRET,
    jwtFromRequest: ExtractJwt.fromExtractors([cookieExtractor]),
  };
  passport.use('jwt', new JWTStrategy(jwtOptions, (payload, done) => {
    return done(null, payload);
  }));
}