import passport from 'passport';
import { Strategy as JwtStrategy, ExtractJwt } from 'passport-jwt';

import { JWT_SECRET } from '../utils.js';

function cookieExtractor(req) {
  let token = null;
  if (req && req.signedCookies) {
    token = req.signedCookies['access_token'];
  }

  return token;
}

export const init = () => {
  const opts = {
    secretOrKey: JWT_SECRET,
    jwtFromRequest: ExtractJwt.fromExtractors([cookieExtractor])
  };
  passport.use('jwt', new JwtStrategy(opts, (payload, done) => {
    return done(null, payload);
  }));
};